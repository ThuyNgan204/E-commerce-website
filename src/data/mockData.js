// src/data/mockData.js

export const users = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "a@example.com",
    username: "nguyenvana",
    phone: "0901234567",
    address: "Hà Nội",
    joinDate: "2025-07-20",
    status: "Active"
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "b@example.com",
    username: "tranthib",
    phone: "0902345678",
    address: "TP.HCM",
    joinDate: "2025-07-21",
    status: "Active"
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "c@example.com",
    username: "levanc",
    phone: "0903456789",
    address: "Đà Nẵng",
    joinDate: "2025-07-22",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "d@example.com",
    username: "phamthid",
    phone: "0904567890",
    address: "Cần Thơ",
    joinDate: "2025-07-22",
    status: "Active"
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "e@example.com",
    username: "hoangvane",
    phone: "0905678901",
    address: "Hải Phòng",
    joinDate: "2025-07-23",
    status: "Active"
  },
  {
    id: 6,
    name: "Đỗ Thị F",
    email: "f@example.com",
    username: "dothif",
    phone: "0906789012",
    address: "Bình Dương",
    joinDate: "2025-07-23",
    status: "Inactive"
  },
  {
    id: 7,
    name: "Vũ Văn G",
    email: "g@example.com",
    username: "vuvang",
    phone: "0907890123",
    address: "Nghệ An",
    joinDate: "2025-07-24",
    status: "Active"
  },
  {
    id: 8,
    name: "Bùi Thị H",
    email: "h@example.com",
    username: "buithih",
    phone: "0908901234",
    address: "Quảng Ninh",
    joinDate: "2025-07-24",
    status: "Active"
  },
  {
    id: 9,
    name: "Ngô Văn I",
    email: "i@example.com",
    username: "ngovani",
    phone: "0909012345",
    address: "Huế",
    joinDate: "2025-07-25",
    status: "Inactive"
  },
  {
    id: 10,
    name: "Đặng Thị K",
    email: "k@example.com",
    username: "dangthik",
    phone: "0910123456",
    address: "Khánh Hòa",
    joinDate: "2025-07-25",
    status: "Active"
  }
];
export const recentOrders = [
  { id: 1, name: "Nguyễn Văn A", product: "Áo Thun Basic", quantity: 2, total: 340000 },
  { id: 2, name: "Trần Thị B", product: "Áo Hoodie", quantity: 1, total: 450000 },
  { id: 3, name: "Lê Văn C", product: "Áo Polo", quantity: 3, total: 900000 },
  { id: 4, name: "Phạm Thị D", product: "Áo Sơ Mi", quantity: 1, total: 320000 },
  { id: 5, name: "Hoàng Văn E", product: "Áo Khoác Jean", quantity: 1, total: 650000 },
];

// src/data/mockData.js
export const earningsData = [
  { month: 'Jan', earnings: 1200 },
  { month: 'Feb', earnings: 2100 },
  { month: 'Mar', earnings: 800 },
  { month: 'Apr', earnings: 1600 },
  { month: 'May', earnings: 2400 },
  { month: 'Jun', earnings: 1900 },
];


export const products = [
  {
    id: 1,
    name: "Áo Polo Trơn",
    code: "POLO001",
    description: "Áo polo cotton mềm mại",
    price: 299000,
    importDate: "2025-08-01",
    saleDate: "2025-08-05",
    stock: 10
  },
  {
    id: 2,
    name: "Áo Thun Trắng",
    code: "TSHIRT001",
    description: "Áo thun cổ tròn trắng basic",
    price: 199000,
    importDate: "2025-08-01",
    saleDate: "2025-08-06",
    stock: 25
  },
  {
    id: 3,
    name: "Áo Sơ Mi Caro",
    code: "SHIRT001",
    description: "Áo sơ mi nam caro xanh",
    price: 349000,
    importDate: "2025-08-02",
    saleDate: "2025-08-07",
    stock: 15
  },
  {
    id: 4,
    name: "Áo Hoodie Đen",
    code: "HOODIE001",
    description: "Áo hoodie nỉ đen basic",
    price: 499000,
    importDate: "2025-08-03",
    saleDate: "2025-08-08",
    stock: 8
  },
  {
    id: 5,
    name: "Áo Khoác Jean",
    code: "JACKET001",
    description: "Áo khoác jean xanh cá tính",
    price: 599000,
    importDate: "2025-08-03",
    saleDate: "2025-08-09",
    stock: 12
  },
  {
    id: 6,
    name: "Áo Sweater Ghi",
    code: "SWEATER001",
    description: "Áo sweater vải nỉ màu ghi",
    price: 399000,
    importDate: "2025-08-04",
    saleDate: "2025-08-10",
    stock: 18
  },
  {
    id: 7,
    name: "Áo Tanktop Đen",
    code: "TANK001",
    description: "Áo tanktop thể thao đen",
    price: 149000,
    importDate: "2025-08-04",
    saleDate: "2025-08-10",
    stock: 20
  },
  {
    id: 8,
    name: "Áo Thun Graphic",
    code: "TSHIRT002",
    description: "Áo thun in hình họa tiết",
    price: 249000,
    importDate: "2025-08-05",
    saleDate: "2025-08-11",
    stock: 14
  },
  {
    id: 9,
    name: "Áo Sơ Mi Trắng",
    code: "SHIRT002",
    description: "Áo sơ mi trắng công sở",
    price: 329000,
    importDate: "2025-08-05",
    saleDate: "2025-08-12",
    stock: 22
  },
  {
    id: 10,
    name: "Áo Khoác Gió",
    code: "JACKET002",
    description: "Áo khoác gió mỏng nhẹ",
    price: 379000,
    importDate: "2025-08-06",
    saleDate: "2025-08-13",
    stock: 16
  }
];

