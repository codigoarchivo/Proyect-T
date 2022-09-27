
export const fileUpload = async (file: any) => {
    
    const cloudUrl = "https://api.cloudinary.com/v1_1/jackson-quintero/upload";
    const forData = new FormData();

    forData.append("upload_preset", "react-journal");
    forData.append("file", file);

    try {

        const rest = await fetch(cloudUrl, {
            method: "POST",
            body: forData,
        });

        if (rest.ok) {
            const { secure_url } = await rest.json();
            return secure_url;
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
    }
};
