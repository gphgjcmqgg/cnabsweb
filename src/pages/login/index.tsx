import * as React from 'react';
import { connect } from 'dva';
import styles from './index.less';

class ABSLogin extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className={styles.cxlogin}>
        111
        <div>11111111111111</div>
        <div>22222222222222</div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { ...state.account };
}

export default connect(mapStateToProps)(ABSLogin);
