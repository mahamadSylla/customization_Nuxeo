import page from '@nuxeo/page/page.mjs';

customElements.whenDefined('nuxeo-app').then(() => {
  const app = document.querySelector('nuxeo-app');
    console.log("bbb");
  page('/wabtecContact', () => {
     console.log("AAAA");
    app.show('/wabtecContact');
  });
  
  
  wabtecContact() {
      return '/wabtecContact';
    },
  

});