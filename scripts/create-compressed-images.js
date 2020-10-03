const compress_images = require("compress-images");
const fs = require("fs");

const imageSource = "images/original/**/*.{jpg,JPG}";
const outputPrefix = "images/output/";

const notifyProgress = (error, completed, statistic) => {
	console.log("-------------");
	console.log(error);
	console.log(completed);
	console.log(statistic);
	console.log("-------------");
};

const createPath = (path) => {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(imagePath);
	}
};

const runImageCompression = (engine) => {
	const imagePath = `${outputPrefix}/engine/`;
	createPath(imagePath);
	compress_images(
		imageSource,
		imagePath,
		{ compress_force: false, statistic: true, autoupdate: true },
		false,
		{ jpg: { engine: engine, command: ["-quality", "60"] } },
		notifyProgress
	);
};

// Create compressed versions of the original files
runImageCompression("jpegtran");
runImageCompression("mozjpeg");
runImageCompression("webp");
runImageCompression("guetzli");
runImageCompression("jpegRecompress");
runImageCompression("jpegoptim");
runImageCompression("tinify");
runImageCompression("jpegRecompress");
