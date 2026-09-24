export const addImageV2 = url => {
  // put your code here
  const p = new Promise((resolve, reject) => { 
    const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    resolve({ width, height });
  };

  const onImageLoadError = () => reject(new Error ('Image load failed'));

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
  });
  return p;
};

// examples

addImageV2('https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'

