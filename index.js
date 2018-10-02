const util = require('util');
const { TransformModule } = require('pipeline');
const Jimp = require('jimp');

const ImageReader = TransformModule.create(async image => {
	return Jimp.read(image);
});

const ImageCropper = TransformModule.create(async (image, x, y, w, h) => {
	image.crop(x - (w / 2), y - (h / 2), w, h);

	return image;
});

const ImageWriter = TransformModule.create(async (image, format = 'image/jpeg') => {
	return await util.promisify(image.getBuffer.bind(image))(format));
});

module.exports = {
	ImageReader,
	ImageCropper,
	ImageWriter
};
