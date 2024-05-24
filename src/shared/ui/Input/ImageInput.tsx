import Icon from "../Icon/Icon";

interface ImageInputProps {
  image: string;
  setImage: (url: string) => void;
  handleDeleteButton: () => void;
}

const ImageInput = ({
  image,
  setImage,
  handleDeleteButton,
}: ImageInputProps) => {
  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = event.target.files;

    if (selectFile && selectFile[0]) {
      const formData = new FormData();
      formData.append("image", selectFile[0]);

      //@TODO : API 연동 POST 요청
    }
  };

  const containerStyle =
    "relative w-[140px] md:w-[135px] lg:w-[160px] h-[140px] md:h-[135px] lg:h-[160px] rounded-lg";

  return (
    <>
      {image ? (
        <div
          className={containerStyle}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[5px] right-[5px] w-[26px] lg:w-7 h-[26px] lg:h-7 p-1 bg-black bg-opacity-50 rounded-lg">
            <Icon
              name="CloseIcon"
              className="w-full h-full"
              // color="#F1F1F5"
              onClick={handleDeleteButton}
            />
          </div>
        </div>
      ) : (
        <div
          className={`${containerStyle} p-[58px] md:p-[55px] lg:p-[63px] border border-solid border-gray-35 bg-black-25`}
        >
          <input
            className="absolute w-full h-full opacity-0"
            type="file"
            onChange={handleUploadImage}
          />
          <Icon
            name="PhotoIcon"
            className="w-full h-full"
            // color="#6E6E82"
          />
        </div>
      )}
    </>
  );
};

export default ImageInput;
