import Navbar from '../../components/global/learner_navbar'
import LoadingOverlay from 'react-loading-overlay-ts'
import HashLoader from 'react-spinners/HashLoader'

function Login() {
    return (
        <LoadingOverlay
            active={false}
            fadeSpeed={100}
            styles={{
                overlay: (base) => ({
                    ...base,
                    background: ' rgba(0, 0, 0, 0.9)'
                })
            }}
            spinner={<HashLoader color="white" size="70" speedMultiplier="2" />}
        >
            <div>
                <Navbar />

                <h1>Login</h1>
            </div>
        </LoadingOverlay>
    );
}

export default Login;