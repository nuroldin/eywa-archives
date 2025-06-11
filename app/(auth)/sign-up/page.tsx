"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const page = () => (
	<AuthForm
		type="SIGN_UP"
		schema={signUpSchema}
		defaultValues={{
			email: "",
			password: "",
			fullName: "",
			universityId: "",
			universityCard: "",
		}}
		onSubmit={async () => ({ success: true })}
	/>
);

export default page;
