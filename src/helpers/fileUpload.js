export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/journal-app-back/image/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-app-back');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        console.log(error);
    }
}