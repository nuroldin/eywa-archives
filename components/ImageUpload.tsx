"use client";
import config from "@/lib/config";
import ImageKit from "imagekit";
import { Image, ImageKitProvider } from "@imagekit/next";
import React, { useRef, useState } from "react";

const {
	env: {
		imagekit: { publicKey, urlEndpoint },
	},
} = config;

const authenticator = async () => {
	try {
		const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

		if (!response.ok) {
			const errorText = await response.text();

			throw new Error(
				`Request failed with status ${response.status}: ${errorText}`
			);
		}

		const data = await response.json();

		const { signature, expire, token } = data;

		return { token, expire, signature };
	} catch (error: any) {
		throw new Error(`Authentication request failed: ${error.message}`);
	}
};

const ImageUpload = () => {
	const ikUploadRef = useRef(null);
	const [file, setFile] = useState<{ filePath: string } | null>(null);

	return (
		<ImageKitProvider urlEndpoint={urlEndpoint}>
			<IKUpload />
		</ImageKitProvider>
	);
};

export default ImageUpload;
