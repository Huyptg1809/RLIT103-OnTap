let bookings = [
  {
    bookingCode: "CIN-001",
    customerName: "Nguyễn Văn An",
    movieTitle: "Ánh Trăng Cuối Phố",
    ticketCount: 2,
    pricePerTicket: 90000,
    totalAmount: 194400
  },
  {
    bookingCode: "CIN-002",
    customerName: "Trần Thị Bình",
    movieTitle: "Biệt Đội Sao Băng",
    ticketCount: 4,
    pricePerTicket: 90000,
    totalAmount: 349920
  },
  {
    bookingCode: "CIN-003",
    customerName: "Lê Minh Châu",
    movieTitle: "Mùa Hè Rực Lửa",
    ticketCount: 6,
    pricePerTicket: 110000,
    totalAmount: 641520
  }
];

do {
  let menuChoice = prompt(
    "=====================================================\n" +
    "     HỆ THỐNG QUẢN LÝ ĐẶT VÉ MOONLIGHT CINEMA        \n" +
    "=====================================================\n" +
    "1. Hiển thị danh sách đơn đặt vé\n" +
    "2. Thêm đơn đặt vé mới\n" +
    "3. Cập nhật đơn đặt vé\n" +
    "4. Xóa đơn đặt vé\n" +
    "5. Tìm kiếm đơn đặt vé theo tên phim\n" +
    "0. Thoát chương trình\n" +
    "=====================================================\n" +
    "Vui lòng nhập lựa chọn của bạn (0 - 5):"
  );

  if (menuChoice === null) {
    break;
  }

  let choice = menuChoice.trim();

  switch (choice) {
    case "1": {
      console.log("--- DANH SÁCH ĐƠN ĐẶT VÉ ---");
      if (bookings.length === 0) {
        console.log("Danh sách đơn đặt vé trống");
        break;
      }

      let totalRevenue = 0;
      for (let i = 0; i < bookings.length; i++) {
        totalRevenue += bookings[i].totalAmount;
        console.log(`${i + 1}. ${bookings[i].bookingCode} - ${bookings[i].customerName} - ${bookings[i].movieTitle}`);
        console.log(`   SL: ${bookings[i].ticketCount} | Giá: ${bookings[i].pricePerTicket.toLocaleString("vi-VN")} VNĐ | Tổng TT: ${bookings[i].totalAmount.toLocaleString("vi-VN")} VNĐ`);
      }

      console.log(`Tổng: ${bookings.length} đơn đặt vé – Doanh thu: ${totalRevenue.toLocaleString("vi-VN")} VNĐ`);
      break;
    }

    case "2": {
      console.log("--- THÊM ĐƠN ĐẶT VÉ MỚI ---");

      let inputCode = prompt("Nhập mã đặt vé (ví dụ: CIN-004):");
      if (inputCode === null) {
        console.log("Đã hủy thao tác thêm đơn đặt vé.");
        break;
      }

      let code = inputCode.trim().toUpperCase();

      if (code === "") {
        console.log("Lỗi: Chưa nhập mã đặt vé");
        break;
      }

      if (code.length < 6) {
        console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
        break;
      }

      if (!code.startsWith("CIN-")) {
        console.log('Lỗi: Sai tiền tố "CIN-"');
        break;
      }

      let hasSpace = false;
      for (let i = 0; i < code.length; i++) {
        if (code[i] === " ") {
          hasSpace = true;
          break;
        }
      }

      if (hasSpace) {
        console.log("Lỗi: Chứa khoảng trắng");
        break;
      }

      let isExisted = false;
      for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].bookingCode.toUpperCase() === code) {
          isExisted = true;
          break;
        }
      }

      if (isExisted) {
        console.log("Lỗi: Mã đặt vé đã tồn tại");
        break;
      }

      let customerName = "";
      while (true) {
        let inputName = prompt("Nhập tên khách hàng:");
        if (inputName === null) {
          break;
        }
        let trimmedName = inputName.trim();
        if (trimmedName === "") {
          console.log("Tên khách hàng không được để trống. Vui lòng nhập lại!");
          continue;
        }
        let words = trimmedName.split(" ");
        let formattedWords = [];
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          if (word !== "") {
            formattedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
          }
        }
        customerName = formattedWords.join(" ");
        break;
      }

      if (customerName === "") {
        console.log("Đã hủy thao tác thêm đơn đặt vé.");
        break;
      }

      let movieTitle = "";
      while (true) {
        let inputTitle = prompt("Nhập tên phim:");
        if (inputTitle === null) {
          break;
        }
        let trimmedTitle = inputTitle.trim();
        if (trimmedTitle === "") {
          console.log("Tên phim không được để trống. Vui lòng nhập lại!");
          continue;
        }
        let words = trimmedTitle.split(" ");
        let formattedWords = [];
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          if (word !== "") {
            formattedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
          }
        }
        movieTitle = formattedWords.join(" ");
        break;
      }

      if (movieTitle === "") {
        console.log("Đã hủy thao tác thêm đơn đặt vé.");
        break;
      }

      let ticketCount = 0;
      while (true) {
        let inputCount = prompt("Nhập số vé:");
        if (inputCount === null) {
          break;
        }
        let countValue = inputCount.trim();
        let num = Number(countValue);
        if (countValue === "" || isNaN(num) || num <= 0 || Math.floor(num) !== num) {
          console.log("Lỗi: Vui lòng nhập số nguyên > 0.");
          continue;
        }
        ticketCount = num;
        break;
      }

      if (ticketCount === 0) {
        console.log("Đã hủy thao tác thêm đơn đặt vé.");
        break;
      }

      let pricePerTicket = 0;
      while (true) {
        let inputPrice = prompt("Nhập giá mỗi vé (VNĐ):");
        if (inputPrice === null) {
          break;
        }
        let priceValue = inputPrice.trim();
        let num = Number(priceValue);
        if (priceValue === "" || isNaN(num) || num <= 0 || Math.floor(num) !== num) {
          console.log("Lỗi: Vui lòng nhập số nguyên > 0.");
          continue;
        }
        pricePerTicket = num;
        break;
      }

      if (pricePerTicket === 0) {
        console.log("Đã hủy thao tác thêm đơn đặt vé.");
        break;
      }

      let baseCost = ticketCount * pricePerTicket;
      let discount = 0;
      if (ticketCount >= 4) {
        discount = Math.round(baseCost * 0.1);
      }
      let serviceFee = Math.round((baseCost - discount) * 0.08);
      let totalAmount = baseCost - discount + serviceFee;

      let newBooking = {
        bookingCode: code,
        customerName: customerName,
        movieTitle: movieTitle,
        ticketCount: ticketCount,
        pricePerTicket: pricePerTicket,
        totalAmount: totalAmount
      };

      bookings.push(newBooking);

      console.log("=====================================================");
      console.log("                  HÓA ĐƠN ĐẶT VÉ                     ");
      console.log("=====================================================");
      console.log(`Mã đặt vé:       ${newBooking.bookingCode}`);
      console.log(`Khách hàng:      ${newBooking.customerName}`);
      console.log(`Tên phim:        ${newBooking.movieTitle}`);
      console.log(`Số vé:           ${newBooking.ticketCount}`);
      console.log(`Giá mỗi vé:      ${newBooking.pricePerTicket.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Chi phí cơ sở:   ${baseCost.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Giảm giá:        ${discount.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Phí dịch vụ:     ${serviceFee.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Tổng thanh toán: ${newBooking.totalAmount.toLocaleString("vi-VN")} VNĐ`);
      console.log("=====================================================");
      console.log("Thêm đơn đặt vé thành công!");
      break;
    }

    case "3": {
      console.log("--- CẬP NHẬT ĐƠN ĐẶT VÉ ---");

      let inputCode = prompt("Nhập mã đặt vé cần cập nhật:");
      if (inputCode === null) {
        console.log("Đã hủy thao tác cập nhật.");
        break;
      }

      let code = inputCode.trim().toUpperCase();
      let index = -1;
      for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].bookingCode.toUpperCase() === code) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        console.log(`Không tìm thấy đơn đặt vé có mã ${code}`);
        break;
      }

      let oldTotal = bookings[index].totalAmount;

      let newTicketCount = 0;
      while (true) {
        let inputCount = prompt("Nhập số vé mới:");
        if (inputCount === null) {
          break;
        }
        let countValue = inputCount.trim();
        let num = Number(countValue);
        if (countValue === "" || isNaN(num) || num <= 0 || Math.floor(num) !== num) {
          console.log("Lỗi: Vui lòng nhập số nguyên > 0.");
          continue;
        }
        newTicketCount = num;
        break;
      }

      if (newTicketCount === 0) {
        console.log(`Tổng thanh toán cũ: ${oldTotal.toLocaleString("vi-VN")} VNĐ | Tổng thanh toán mới: ${oldTotal.toLocaleString("vi-VN")} VNĐ`);
        console.log("Đã hủy cập nhật");
        break;
      }

      let newPrice = 0;
      while (true) {
        let inputPrice = prompt("Nhập giá mỗi vé mới (VNĐ):");
        if (inputPrice === null) {
          break;
        }
        let priceValue = inputPrice.trim();
        let num = Number(priceValue);
        if (priceValue === "" || isNaN(num) || num <= 0 || Math.floor(num) !== num) {
          console.log("Lỗi: Vui lòng nhập số nguyên > 0.");
          continue;
        }
        newPrice = num;
        break;
      }

      if (newPrice === 0) {
        console.log(`Tổng thanh toán cũ: ${oldTotal.toLocaleString("vi-VN")} VNĐ | Tổng thanh toán mới: ${oldTotal.toLocaleString("vi-VN")} VNĐ`);
        console.log("Đã hủy cập nhật");
        break;
      }

      let baseCost = newTicketCount * newPrice;
      let discount = 0;
      if (newTicketCount >= 4) {
        discount = Math.round(baseCost * 0.1);
      }
      let serviceFee = Math.round((baseCost - discount) * 0.08);
      let newTotal = baseCost - discount + serviceFee;

      bookings[index].ticketCount = newTicketCount;
      bookings[index].pricePerTicket = newPrice;
      bookings[index].totalAmount = newTotal;

      console.log(`Tổng thanh toán cũ: ${oldTotal.toLocaleString("vi-VN")} VNĐ | Tổng thanh toán mới: ${newTotal.toLocaleString("vi-VN")} VNĐ`);
      console.log("Cập nhật thành công");
      break;
    }

    case "4": {
      console.log("--- XÓA ĐƠN ĐẶT VÉ ---");

      let inputCode = prompt("Nhập mã đặt vé cần xóa:");
      if (inputCode === null) {
        console.log("Đã hủy thao tác xóa.");
        break;
      }

      let code = inputCode.trim().toUpperCase();
      let index = -1;
      for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].bookingCode.toUpperCase() === code) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        console.log(`Không tìm thấy đơn đặt vé có mã ${code}`);
        break;
      }

      let confirmChoice = prompt(`Bạn có chắc chắn muốn xóa đơn đặt vé ${code}? (Y/N):`);
      if (confirmChoice !== null && confirmChoice.trim().toUpperCase() === "Y") {
        bookings.splice(index, 1);
        console.log(`Xóa thành công, còn ${bookings.length} đơn`);
      } else {
        console.log(`Đã hủy thao tác xóa, còn ${bookings.length} đơn`);
      }
      break;
    }

    case "5": {
      console.log("--- TÌM KIẾM ĐƠN ĐẶT VÉ THEO TÊN PHIM ---");

      let keyword = prompt("Nhập từ khóa tên phim cần tìm kiếm:");
      if (keyword === null || keyword.trim() === "") {
        console.log("Chưa nhập từ khóa tìm kiếm");
        break;
      }

      let searchTerm = keyword.trim().toLowerCase();
      let matchedCount = 0;
      let totalRevenue = 0;

      for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].movieTitle.toLowerCase().includes(searchTerm)) {
          matchedCount++;
          totalRevenue += bookings[i].totalAmount;
          console.log(`${matchedCount}. ${bookings[i].bookingCode} - ${bookings[i].customerName} - ${bookings[i].movieTitle}`);
          console.log(`   SL: ${bookings[i].ticketCount} | Giá: ${bookings[i].pricePerTicket.toLocaleString("vi-VN")} VNĐ | Tổng TT: ${bookings[i].totalAmount.toLocaleString("vi-VN")} VNĐ`);
        }
      }

      if (matchedCount === 0) {
        console.log("Không tìm thấy đơn đặt vé phù hợp");
      } else {
        console.log(`Tổng: ${matchedCount} đơn đặt vé – Doanh thu: ${totalRevenue.toLocaleString("vi-VN")} VNĐ`);
      }
      break;
    }

    case "0":
      console.log("==================================================");
      console.log("           BÁO CÁO TỔNG KẾT ĐƠN ĐẶT VÉ            ");
      console.log("==================================================");

      if (bookings.length === 0) {
        console.log("Chưa có đơn đặt vé nào");
      } else {
        let totalRevenue = 0;
        let maxBooking = bookings[0];

        for (let i = 0; i < bookings.length; i++) {
          totalRevenue += bookings[i].totalAmount;
          if (bookings[i].totalAmount > maxBooking.totalAmount) {
            maxBooking = bookings[i];
          }
        }

        let averageRevenue = Math.round(totalRevenue / bookings.length);

        console.log(`Tổng số đơn đặt vé: ${bookings.length}`);
        console.log(`Tổng doanh thu: ${totalRevenue.toLocaleString("vi-VN")} VNĐ`);
        console.log(`Doanh thu trung bình: ${averageRevenue.toLocaleString("vi-VN")} VNĐ`);
        console.log(`Đơn cao nhất: ${maxBooking.bookingCode} - ${maxBooking.totalAmount.toLocaleString("vi-VN")} VNĐ`);
      }

      console.log("==================================================");
      console.log("Cảm ơn bạn đã sử dụng hệ thống Moonlight Cinema! Tạm biệt.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ! Vui lòng chọn số từ 0 đến 5.");
      break;
  }

  if (choice === "0") {
    break;
  }
} while (true);

function runMenu() {
  location.reload();
}
