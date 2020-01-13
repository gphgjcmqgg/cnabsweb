import React from 'react';
import styles from './index.less';
import Link from 'umi/link';

export default function() {
  return (
    <>
      <div className={styles.normal}>
        <div className={styles.welcome} />
      </div>
      <div>
        <span>登录</span>
      </div>
      <div className={styles.panellist}>
        <div>查区域</div>
        <div>查城投</div>
        <div>查政策</div>
      </div>
      <div className={styles.panellist}>
        <div>风险预警</div>
        <div>深度研究</div>
        <div>舆情动态</div>
      </div>
    </>
  );
}
