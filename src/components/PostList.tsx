import {Dispatch, SetStateAction, useState} from "react";
import PostCard from "./PostCard";

export interface BaiViet {
  tieuDe: string;
  tacGia: string;
  ngayDang: string;
  moTa: string;
  anh: string;
  theLoai: "Công nghệ" | "Du lịch" | "Ẩm thực" | "Đời sống" | "Khác";
  id: string;
}

const PostList = (props: {
  danhSachBaiViet: BaiViet[];
  setDanhSachBaiViet: Dispatch<SetStateAction<BaiViet[]>>;
}) => {
  const {danhSachBaiViet, setDanhSachBaiViet} = props;

  return (
    <div style={{display: "flex"}}>
      <div>
        <button>Thêm mới bài viết</button>
      </div>
      {danhSachBaiViet.map((item) => (
        <PostCard
        key={item.id}
          danhSachBaiViet={danhSachBaiViet}
          setDanhSachBaiViet={setDanhSachBaiViet}
          baiViet={item}
        />
      ))}
    </div>
  );
};

export default PostList;
