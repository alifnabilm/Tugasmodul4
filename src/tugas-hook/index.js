import React from "react";

function Hooks() {
  const [data, setData] = React.useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const Ref1 = React.useRef();
  const Ref2 = React.useRef();
  const Ref3 = React.useRef();
  const Ref4 = React.useRef();

  function handleCheck() {
    if (data.email === "") {
      alert("Email harus diisi");
      Ref1.current.focus();
    } else if (data.name === "") {
      alert("Nama harus diisi");
      Ref2.current.focus();
    } else if (data.username === "") {
      alert("Username harus diisi");
      Ref3.current.focus();
    } else if (data.password === "") {
      alert("Passowrd harus diisi");
      Ref4.current.focus();
    } else {
      setData({
        ...data,
        ["email"]: "",
        ["name"]: "",
        ["username"]: "",
        ["password"]: "",
      });
      alert(
        "Selamat data anda lengkap, silahkan isi ulang pada website instagram!"
      );
      window.location.replace(
        "https://www.instagram.com/accounts/emailsignup/"
      );
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#8aa",
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2>Instagram Register</h2>
      <input
        type="email"
        style={{ width: 300 }}
        ref={Ref1}
        value={data.email}
        placeholder="Email"
        onChange={(value) =>
          setData({ ...data, ["email"]: value.target.value })
        }
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={Ref2}
        value={data.name}
        placeholder="Full Nama"
        onChange={(value) => setData({ ...data, ["name"]: value.target.value })}
      />
      <br />
      <input
        type="text"
        style={{ width: 300 }}
        ref={Ref3}
        value={data.username}
        placeholder="Username"
        onChange={(value) =>
          setData({ ...data, ["username"]: value.target.value })
        }
      />
      <br />
      <input
        type="password"
        style={{ width: 300 }}
        ref={Ref4}
        value={data.password}
        placeholder="Password"
        onChange={(value) =>
          setData({ ...data, ["password"]: value.target.value })
        }
      />
      <br />
      <input type="button" value="Register" onClick={() => handleCheck()} />
    </div>
  );
}

export default Hooks;