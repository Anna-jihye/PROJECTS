import {clsx} from "clsx";
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const imageToBase64 = (imagePath) => {
    return new Promise((resolve, reject) => {
        fetch(imagePath)
            .then((response) => response.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);  // 返回Base64字符串
                };
                reader.onerror = reject;  // 错误处理
                reader.readAsDataURL(blob);  // 将blob转换为Base64
            })
            .catch(reject);  // 捕获fetch错误
    });
};