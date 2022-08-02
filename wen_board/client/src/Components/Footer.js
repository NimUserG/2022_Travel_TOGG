import { useState } from 'react';

function Footer() {
    const [footercolor, setFootercolor] = useState('light');
  return (
    <footer className='container-fluid navbar-fixed-bottom' bd={footercolor}>
    <div>
      <hr className="my-2 "/>
    </div>
    </footer>
  );
}

export default Footer;