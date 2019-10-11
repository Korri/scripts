(function () {
  const div = document.createElement('div');
  div.innerText = 'This is my beatifull highjack';
  Object.assign(div.style, {
    border: '4px solid #B41E1D',
    padding: '25px',
    color: '#B41E1D',
    fontSize: '40px',
    marginTop: '20px',
    marginBottom: '20px',
  });
  div.attributes.style = 'border: 4px solid #B41E1D; padding: 25px';
  document.querySelector('[aria-label="Breadcrumb"]').after(div);
})();