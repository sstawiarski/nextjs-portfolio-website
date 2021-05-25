import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { FormType } from "../@types";
import AlertBar from "../components/Feedback/AlertBar";

type Message = {
    text: string | React.ReactNode;
    color: "red" | "blue" | "green";
};

const Resume: FC = () => {
    const [message, setMessage] = useState<Message | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormType>();

    const emailFormSubmitHandler = (data: FormType) => {
        const body = {
            email: data.email,
            subject: data.subject,
            message: data.body,
        };

        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(async (res) => { 
                const json = await res.json();
                return { status: res.status, json: json };
            })
            .then((json) => {
                if (json.status === 200) {
                    setMessage({ text: json.json?.message, color: "green"});
                    reset();
                } else {
                    setMessage({ text: json.json?.message, color: "red"});
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <article className="md:shadow w-11/12 md:w-3/4 rounded mr-auto ml-auto p-4 md:mt-10 bg-white dark:bg-gray-700">
            <header>
                <h1 className="text-2xl mb-5 font-bold">Contact</h1>
            </header>

            <section id="contact-form">
                <form
                    className="flex flex-col ml-auto mr-auto"
                    onSubmit={handleSubmit(emailFormSubmitHandler)}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="johnsmith@example.com"
                        className="border p-1 mb-2 rounded focus:outline-none focus:ring-2 focus:border-blue-600 dark:focus:border-green-600 dark:bg-gray-800 dark:border-black"
                        {...register("email", {
                            required: "Email address is required",
                            pattern: {
                                value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                                message: "Invalid email",
                            },
                        })}
                    />
                    {errors?.email && (
                        <span className="-mt-2 mb-2 text-red-800 dark:text-red-500">{errors?.email?.message}</span>
                    )}

                    <label htmlFor="subject">Subject</label>
                    <select
                        id="subject"
                        defaultValue="Select a subject"
                        className="mb-3 dark:text-gray-400 dark:bg-gray-800 focus:outline-none border dark:border-black rounded"
                        {...register("subject", { validate: (value) => value !== "Select a subject" })}>
                        <option>Select a subject</option>
                        <option>Recruitment</option>
                        <option>Project Inquiry</option>
                        <option>Other</option>
                    </select>
                    {errors?.subject && (
                        <span className="-mt-3 mb-3 text-red-800 dark:text-red-500">Invalid subject selection</span>
                    )}

                    <textarea
                        id="body"
                        placeholder="Enter a message"
                        className="border p-1 rounded focus:outline-none focus:ring-2 focus:border-blue-600 dark:focus:border-green-600 dark:bg-gray-800 dark:border-black"
                        rows={5}
                        {...register("body", { required: true })}
                    />
                    {errors?.body && <span className="text-red-800 dark:text-red-500">No message content</span>}

                    <button
                        className="py-2 px-4 mt-3 ml-auto rounded text-white dark:text-gray-200 bg-blue-600 dark:bg-green-600 hover:bg-blue-700 dark:hover:bg-green-600 transition-colors max-w-min"
                        type="submit">
                        Submit
                    </button>
                </form>
                <div className="mt-4">
                    <AlertBar
                        message={message?.text}
                        color={message?.color}
                        open={Boolean(message)}
                        onClose={() => setMessage(null)}
                        autoTimeout={3000}
                    />
                </div>
            </section>
        </article>
    );
};

export default Resume;
