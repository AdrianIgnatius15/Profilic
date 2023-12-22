import multer from 'multer';

const multerConfigurationStorage = multer.diskStorage({
    destination: (__request, __file, callback) => {
        callback(null, './uploads/');
    },
    filename(__req, file, callback) {
        // const fileTypeExtension: string = file.mimetype.split('/')[1];
        callback(null, `${file.originalname}`);
    }
});

export const multerMiddleware = multer({ storage: multerConfigurationStorage });
