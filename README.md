# pipeline-image

Image transform modules for pipeline

``` javascript
const { ImageReader, ImageCropper, ImageWriter } = require('pipeline-image');

new Pipeline([
	// raw images
	new ImageReader(),
	new ImageCropper(x, y, width, height),
	new ImageWriter('image/jpeg')
]);
```
