import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink
        style={(isActived) => ({
          color: isActived ? "red" : "green",
        })}
        to={"/"}
      >
        Trang chủ
      </NavLink>
      <NavLink to={"/create"}>Tạo bài</NavLink>
      <NavLink to={"/posts/:id"}>Chi tiết</NavLink>
      <NavLink to={"/posts/edit/:id"}>Sửa bài</NavLink>
    </div>
  );
};

export default Navbar;
