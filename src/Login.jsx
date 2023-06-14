import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const authContext = useContext(AuthContext);
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleUseridChange = (e) => {
        setUserid(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // 아이디와 비밀번호
        if (userid === 'dongyang' && password === 'dy1234') {
            authContext.login(); // 로그인 상태 업데이트
            navigate('/'); // 초기 화면으로 이동
        } else {
            alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        }
    };

    return {
        userid,
        password,
        handleUseridChange,
        handlePasswordChange,
        handleLogin,
    };
};

const Login = () => {
    const { userid, password, handleUseridChange, handlePasswordChange, handleLogin } = useLogin();

    return (
        <div className="login-form">
            <form>
                <div>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" id="userid" value={userid} onChange={handleUseridChange} />
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="button" onClick={handleLogin}>로그인</button>
            </form>
        </div>
    );
};

export default Login;
