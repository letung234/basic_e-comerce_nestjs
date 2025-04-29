import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema(
  {
    // Tên quốc gia (ví dụ: "Vietnam")
    country: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Địa chỉ cụ thể, chẳng hạn như "123 Đường ABC"
    physicalAddress: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Tên người nhận địa chỉ
    firstName: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Họ của người nhận địa chỉ
    lastName: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Số căn hộ nếu có (ví dụ: "A10", "B3", ...), trường này không bắt buộc
    apartmentNumber: {
      type: Number,
      required: false, // Trường này không bắt buộc
    },

    // Thành phố nơi địa chỉ được cung cấp (ví dụ: "Hanoi", "Ho Chi Minh City")
    city: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Tỉnh hoặc khu vực (tương đương với quận hoặc thành phố)
    governorate: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Mã bưu điện của địa chỉ (ví dụ: 100000)
    postalCode: {
      type: Number,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Số điện thoại của người nhận địa chỉ (ví dụ: "+84901234567")
    phoneNumber: {
      type: String,
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // ID của người dùng mà địa chỉ này liên kết tới, là một ObjectId tham chiếu đến mô hình 'User'
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, // Trường này bắt buộc phải có giá trị
      index: true, // Đánh dấu trường này là index để tìm kiếm nhanh hơn
      ref: 'User', // Liên kết với mô hình 'User' (một người dùng cụ thể)
    },
  },
  {
    timestamps: true, // Tự động thêm các trường 'createdAt' và 'updatedAt' để theo dõi thời gian
  },
);
