import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory

  const handleForgotPassword = () => {
    // Xử lý logic khi người dùng quên mật khẩu
    alert('Vui lòng liên hệ với quản lý thông qua hotline: +84 835 778 789 hoặc qua email: support.eco@gmail.com');
  };

  const getDataFromApi = async () => {
    try {
      const response = await fetch('http://localhost:3002/account');
      if (!response.ok) {
        throw new Error('Failed to fetch account data');
      }
      const response2 = await fetch('http://localhost:3002/book');
      console.log(response2.json())
      const data = await response.json();
      console.log(data)
      return data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching account data:', error);
      throw error; // Ném lỗi nếu có lỗi xảy ra
    }
  };
  const onSubmit = async (event) => {

    try {
      const accounts = await getDataFromApi();
      console.log(event)
      const loggedInAccount = accounts.find(
        account => account.email === event.email && account.password === event.password
      );

      if (loggedInAccount) {
        navigate('/admin/');
      } else {
        alert('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="container hero"
    style={{
      backgroundImage: `url("https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/3/21/1170122/296817374_1015897554.jpg")`,
      paddingTop: "0",
    }}>
      <div className="page-container" id="page-container">
        <main className="main">
          <div className="login-div content">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <h1 style={{ fontSize: '20px', marginBottom: '9px' }}>Đăng Nhập (dành cho nhân viên)</h1>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-cus"
                  {...register('email')}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-cus"
                  {...register('password')}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-cus">
                Đăng Nhập
              </button>
              <label
                className="form-check-label"
                htmlFor="exampleCheck1"
                style={{ marginTop: '10px', fontSize: '12px' }}
              >
                <button
                  type="button"
                  style={{ textDecoration: 'none', background: 'none', border: 'none', color: 'blue', cursor: 'pointer', padding: 0 }}
                  onClick={handleForgotPassword}
                >
                  Quên Mật Khẩu?
                </button>
              </label>
              <a
                className="btn btn-primary btn-cus"
                style={{ marginTop: '30px' }}
                href="/"
              >
                Trở Về Trang Chủ
              </a>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
