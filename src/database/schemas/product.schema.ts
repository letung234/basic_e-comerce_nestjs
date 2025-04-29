import * as mongoose from 'mongoose';

// Định nghĩa Schema cho Product
export const ProductSchema = new mongoose.Schema(
  {
    // Tên sản phẩm
    name: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có khi tạo sản phẩm
    },

    // Giá sản phẩm
    price: {
      type: Number, // Kiểu dữ liệu là Number
      required: true, // Trường này là bắt buộc phải có khi tạo sản phẩm
    },

    // Hình ảnh của sản phẩm (danh sách các URL của ảnh)
    imgs: {
      type: [String], // Kiểu dữ liệu là mảng các chuỗi (danh sách URL ảnh)
      required: true, // Trường này là bắt buộc phải có
    },

    // Màu sắc của sản phẩm (danh sách các màu)
    colors: {
      type: [String], // Kiểu dữ liệu là mảng các chuỗi (danh sách các màu sắc)
      required: true, // Trường này là bắt buộc phải có
    },

    // Mô tả sản phẩm
    description: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có
    },

    // Kích thước sản phẩm (danh sách các kích thước)
    sizes: {
      type: [String], // Kiểu dữ liệu là mảng các chuỗi (danh sách kích thước)
      required: true, // Trường này là bắt buộc phải có
    },

    // Thông tin chi tiết về sản phẩm
    productInfo: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có
    },

    // Trạng thái sản phẩm hết hàng hay không
    outOfStock: {
      type: Boolean, // Kiểu dữ liệu là Boolean (True/False)
      default: false, // Mặc định là false (sản phẩm có sẵn)
    },

    // Số lượt đánh giá sản phẩm
    numberOfRates: {
      type: Number, // Kiểu dữ liệu là Number
      default: 0, // Mặc định là 0 (chưa có đánh giá)
    },

    // Tổng điểm đánh giá của sản phẩm (tổng điểm từ tất cả các đánh giá)
    sumOfRates: {
      type: Number, // Kiểu dữ liệu là Number
      default: 0, // Mặc định là 0 (chưa có đánh giá)
    },

    // Tổng số điểm đánh giá (số điểm trung bình)
    totalRates: {
      type: Number, // Kiểu dữ liệu là Number
      default: 0, // Mặc định là 0 (chưa có đánh giá)
    },

    // Đánh giá sản phẩm là sản phẩm bán chạy nhất hay không (giá trị có thể dùng cho phân tích doanh số)
    bestSeller: {
      type: Number, // Kiểu dữ liệu là Number (dùng số để đánh giá mức độ bán chạy)
      default: 0, // Mặc định là 0 (không phải sản phẩm bán chạy nhất)
    },
  },
  {
    timestamps: true, // Tự động thêm các trường `createdAt` và `updatedAt` vào document
  },
);
