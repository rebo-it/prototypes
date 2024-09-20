import React from 'react';
const LoadingBar: React.FC = () => {
 
    return (
<div className="Frame1" style={{width: 648, height: 300, position: 'relative', background: 'white', borderRadius: 40, overflow: 'hidden'}}>
  <div className="Rectangle2" style={{width: 420, height: 40, left: 114, top: 170, position: 'absolute', background: '#F4F4F4', borderRadius: 20, border: '2px #E3E3E3 solid'}} />
  <div className="Component1" style={{left: 124, top: 178, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
    <div className="Rectangle1" style={{width: 244, height: 24, background: '#2E9BFF', borderRadius: 12}} />
  </div>
  <div className="Loading" style={{left: 250, top: 236, position: 'absolute', color: '#222222', fontSize: 24, fontFamily: 'Merriweather Sans', fontWeight: '700', wordWrap: 'break-word'}}>En construcción...</div>
</div>
  );
};
export default LoadingBar;