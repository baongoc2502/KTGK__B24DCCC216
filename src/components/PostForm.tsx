import {useState} from "react";
import {BaiViet} from "./PostList";

const PostForm = (props: {
  danhSachBaiViet: BaiViet[];
  setDanhSachBaiViet: any;
}) => {
  const {danhSachBaiViet, setDanhSachBaiViet} = props;
  const [thongTinNguoiDungNhap, setThongTinNguoiDungNhap] = useState<BaiViet>({
    tieuDe: "",
    tacGia: "",
    ngayDang: "",
    theLoai: "Công nghệ",
    anh: "",
    moTa: "",
    id: "",
  });

  const xacThucThongTin = () => {
    if (!thongTinNguoiDungNhap.tieuDe.trim().length) {
      alert("Vui lòng nhập tiêu đề");
      return false;
    }
    return true;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const xacThuc = xacThucThongTin();
          console.log(thongTinNguoiDungNhap);
          if (xacThuc) {
            setDanhSachBaiViet([
              ...danhSachBaiViet,
              {
                ...thongTinNguoiDungNhap,
                id: (danhSachBaiViet.length + 1).toString(),
              },
            ]);
          } else {
          }
        }}
      >
        <label>Tiêu đề</label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              tieuDe: e.target.value,
            });
          }}
          name="tieuDe"
        />
        <label>Tác giả</label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              tacGia: e.target.value,
            });
          }}
          name="tacGia"
        />
        <label>Ngày đăng</label>
        <input
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              ngayDang: e.target.value,
            });
          }}
          name="ngayDang"
        />
        <label>Thể loại</label>
        <select
          onChange={(e) => {
            setThongTinNguoiDungNhap({
              ...thongTinNguoiDungNhap,
              theLoai: e.target.value as any,
            });
          }}
          name="theLoai"
        >
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
        </select>
        <button type="submit">Lưu thông tin</button>
      </form>
    </div>
  );
};

export default PostForm;
