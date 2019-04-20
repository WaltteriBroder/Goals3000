import Head from '../utils/pageHead';
import { body } from '../styles/styles-global';
import { layout } from '../styles/styles-layout';

const Layout = props => {

  return (
    <div className="app" blur={props.blur}>
      <Head />
      <header className="app-header">
        <h1>we are very goal-oriented people ;-D</h1>
        {/* <button className="btn-primary add-goal-btn">
          add new goal +
        </button> */}
      </header>
      <div className="app-content">
        {props.children}
      </div>
      <footer className="app-footer">
        THIS IS A FOOTER 😤
      </footer>

      <style jsx global>{body}</style>
      <style jsx>{layout}</style>
    </div>
  );
}

export default Layout;