

const Blog = () => {
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center text-4xl font-bold">Our Blogs</h1>

            <div className="collapse-title ">
                <h1 className="text-2xl font-bold">What is an access token?</h1>
                <p className="text-lg text-gray-500">
                    An access token is a temporary, limited-use credential granted to a client application (e.g., a mobile app or a web application) after a user has successfully authenticated.
                    <br />
                    It is used to authorize the client application to access specific resources on behalf of the authenticated user.
                    <br />
                    Access tokens are typically short-lived, lasting for a relatively short duration, often measured in minutes or hours, to enhance security.
                    <br />
                    They are included in the HTTP headers of API requests made by the client to access protected resources, ensuring that the request is made on behalf of the authorized user.
                </p>
            </div>

            <div className="collapse-title ">
                <h1 className="text-2xl font-bold">What is a refresh token?</h1>
                <p className="text-lg text-gray-500">
                    A refresh token is a long-lived credential that is used to obtain new access tokens without the user needing to reauthenticate.
                    <br />
                    Unlike access tokens, refresh tokens are typically long-lasting, often with a validity period measured in days or weeks.
                    <br />
                    They are securely stored on the client side (e.g., a mobile device or a web browser) and are used to request a new access token when the current access token expires.
                    <br />
                    The refresh token is a way to maintain a "long-term" authenticated session, eliminating the need for the user to provide their credentials (e.g., username and password) frequently.
                </p>
            </div>




        </div>
    );
};

export default Blog;