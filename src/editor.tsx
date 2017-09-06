import app, { Component } from 'apprun';
import { serializeObject, INewArticle, articles } from './api'
import Errors from './error-list';

class createComponent extends Component {
  state = {
    user: null,
  };

  view = (state) => {
    if (!app['user']) return;
    return <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">

            {state.errors && <Errors errors={state.errors} />}

            <form onsubmit={e => this.run('create-article', e)}>
              <fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Article Title" name="title" />
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" placeholder="What's this article about?" name="description"/>
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control" rows="8" placeholder="Write your article (in markdown)" name="body"></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" placeholder="Enter tags" name="tags"/>
                  <div className="tag-list"></div>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  }

  update = {
    '#/editor': state => {
      if (!app['user']) app.run('#/login');
      return state
    },
    'create-article': async (state, e) => {
      try {
        e.preventDefault();
        const article = serializeObject<any>(e.target);
        article.tagList = article.tags.split(',');
        const result = await articles.create(article);
        document.location.hash = `#/article/${result.article.slug}`;
        return state;
      } catch ({ errors }) {
        return {...state, errors}
      }
    }
  }
}

new createComponent().mount('my-app')
