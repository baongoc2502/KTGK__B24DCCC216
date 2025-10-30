import {BaiViet} from "./PostList";

const PostCard = (props: {
  baiViet: BaiViet;
  danhSachBaiViet: BaiViet[];
  setDanhSachBaiViet: any;
}) => {
  const {baiViet, danhSachBaiViet, setDanhSachBaiViet} = props;

  const deleteBaiViet = () => {
    setDanhSachBaiViet(
      danhSachBaiViet.filter((item) => item.id !== baiViet.id)
    );
  };

  return (
    <div
      style={{
        width: 200,
        height: 200,
        border: "5px solid #ccc",
        padding: 12,
        margin: 12,
      }}
    >
      <h1>{baiViet.tieuDe}</h1>
      <div>Tác giả: {baiViet.tacGia}</div>
      <div>Ngày đăng: {baiViet.ngayDang}</div>
      <div>
        <button>Xem chi tiết</button>
        <button>Chỉnh sửa</button>
        <button onClick={() => deleteBaiViet()}>Xóa</button>
      </div>
    </div>
  );
};

export default PostCard;
