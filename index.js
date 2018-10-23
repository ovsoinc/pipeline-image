const util = require('util');
const { TransformModule } = require('pipeline');

class ImageReader extends TransformModule {
	async transform(image) {
		return module.exports.Jimp.read(image);
	}
}

class ImageCropper extends TransformModule {
	async transform(image) {
		image.crop(this.x - (this.w / 2), this.y - (this.h / 2), this.w, this.h);

		return image;
	}
}

ImageCropper.inputs = {
	x: Number,
	y: Number,
	w: Number,
	h: Number
};

class ImageWriter extends TransformModule {
	async transform(image) {
		return await util.promisify(image.getBuffer.bind(image))(this.format);
	}
}

ImageWriter.inputs = {
	format: String
};

module.exports = {
	ImageReader,
	ImageCropper,
	ImageWriter
};
