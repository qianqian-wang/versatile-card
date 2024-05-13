export function isImgLink(url = '') {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
    const extension = url.split('.').pop().toLowerCase();
    return imageExtensions.includes(extension);
}

export function imageExists(imageUrl) {
    if (!imageUrl) return false
    const img = new Image();
    img.src = imageUrl;
    return img.naturalWidth !== 0 || img.width !== 0;
}