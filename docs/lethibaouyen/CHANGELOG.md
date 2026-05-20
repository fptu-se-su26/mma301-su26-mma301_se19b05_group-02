# Changelog

## 1. Quy định ghi Changelog

File này dùng để ghi lại các thay đổi quan trọng trong quá trình thực hiện bài tập, lab, assignment hoặc project.

Nguyên tắc ghi changelog:

- Chỉ ghi những gì đã hoàn thành thật sự.
- Không ghi kế hoạch nếu chưa thực hiện.
- Mỗi thay đổi nên có ngày, nội dung, người thực hiện và minh chứng.
- Nếu có AI hỗ trợ, cần ghi rõ AI đã hỗ trợ phần nào.
- Nếu có commit GitHub, cần ghi link commit.
- Nếu có lỗi đã sửa, cần ghi rõ lỗi, nguyên nhân và cách xử lý.

---

## 2. Thông tin project

| Thông tin | Nội dung |
|---|---|
| Môn học | MMA301 |
| Mã môn học | MMA301 |
| Lớp | SE19B05 |
| Học kỳ | Summer 2026 |
| Tên bài tập / Project | Motov - Hệ thống quản lí và cho thuê xe máy |
| Tên sinh viên / Nhóm | Lê Thị Bảo Uyên / Nhóm 2 |
| MSSV / Danh sách MSSV | DE180515 |
| Giảng viên hướng dẫn | QuangLTN3 |
| Repository URL | |
| Ngày bắt đầu | 15/05/2026 |
| Ngày hoàn thành | Đang thực hiện |

---

## 3. Tổng quan các phiên bản/giai đoạn

| Phiên bản/Giai đoạn | Thời gian | Nội dung chính | Trạng thái |
|---|---|---|---|
| Phase 01 | 15/05/2026 | Khởi tạo project | In Progress |
| Phase 02 | 20/05/2026 | Phân tích yêu cầu | In Progress |
| Phase 03 | Chưa thực hiện | Thiết kế hệ thống | Not Started |
| Phase 04 | Chưa thực hiện | Implementation | Not Started |
| Phase 05 | Chưa thực hiện | Testing & Debug | Not Started |
| Phase 06 | Chưa thực hiện | Hoàn thiện báo cáo và demo | Not Started |

---

# [Phase 01] Khởi tạo project

## Ngày thực hiện

```text
15/05/2026
```

## Đã hoàn thành

- [x] Tạo repository
- [x] Tạo cấu trúc thư mục project
- [x] Tạo file README.md
- [x] Tạo thư mục `docs/`
- [x] Tạo file `AI_AUDIT_LOG.md`
- [x] Tạo file `PROMPTS.md`
- [x] Tạo file `REFLECTION.md`
- [x] Tạo file `CHANGELOG.md`
- [x] Khởi tạo source code ban đầu
- [x] Cài đặt thư viện/công cụ cần thiết
- [x] Cấu hình môi trường chạy project

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 | Tạo repository GitHub cho project Motov | Lê Thị Bảo Uyên | GitHub Repository | Screenshot repository |
| 2 | Khởi tạo cấu trúc thư mục gồm client-web, mobile-app, server, docs | Lê Thị Bảo Uyên | Project Structure | Screenshot VSCode |
| 3 | Khởi tạo React Native Expo cho mobile app | Lê Thị Bảo Uyên | docs/ | Screenshot folder docs |
| 4 | Tạo các file tài liệu bắt buộc trong thư mục docs/ | Lê Thị Bảo Uyên | mobile-app/ | Screenshot terminal Expo |
| 5 | Khởi tạo NodeJS + Express backend | Lê Thị Bảo Uyên | server/ | Screenshot package.json |
| 6 | Cài đặt các thư viện cơ bản: Express, MongoDB, React Native, TailwindCSS | Lê Thị Bảo Uyên | package.json | Screenshot npm install |
| 7 | Cấu hình môi trường chạy ban đầu cho frontend và backend | Lê Thị Bảo Uyên | server/, mobile-app/ | Screenshot chạy project |

## AI có hỗ trợ không?

- [x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

AI hỗ trợ:
- Gợi ý ý tưởng project Motov
- Đề xuất kiến trúc hệ thống web + mobile
- Gợi ý cấu trúc thư mục project
- Hướng dẫn khởi tạo React Native Expo
- Hướng dẫn tạo backend NodeJS + Express
- Gợi ý công nghệ phù hợp với project
- Hỗ trợ viết README và CHANGELOG

## Commit/Screenshot minh chứng

- Screenshot repository GitHub
- Screenshot cấu trúc thư mục project trong VSCode
- Screenshot terminal khởi tạo Expo và NodeJS
- Link commit GitHub: [(https://github.com/fptu-se-su26/mma301-su26-mma301_se19b05_group-02/tree/lethibaouyen)]

## Ghi chú

Project Motov được định hướng phát triển theo mô hình web + mobile application.
Frontend web dùng ReactJS.
Mobile app dùng React Native Expo.
Backend dùng NodeJS + Express.
Database sử dụng MongoDB.

---

# [Phase 02] Phân tích yêu cầu

## Ngày thực hiện

```text
19/5/2026
```

## Đã hoàn thành

- [x] Xác định problem statement
- [x] Xác định user roles
- [x] Viết user stories
- [x] Viết use cases
- [x] Xác định functional requirements
- [x] Xác định non-functional requirements
- [x] Xác định business rules
- [x] Xác định acceptance criteria
- [x] Review yêu cầu với giảng viên/nhóm
- [ ] Chỉnh sửa yêu cầu sau feedback

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 | Xác định bài toán quản lí và cho thuê xe máy Motov | Lê Thị Bảo Uyên | SRS Document | Screenshot tài liệu |
| 2 | Xác định các vai trò người dùng gồm Admin, Staff, Customer | Lê Thị Bảo Uyên | Use Case | Screenshot use case |
| 3 | Viết user stories cho khách hàng và quản trị viên | Lê Thị Bảo Uyên | User Stories |Screenshot tài liệu |
| 4 | Xác định các chức năng chính của hệ thống | Lê Thị Bảo Uyên | Functional Requirements |Screenshot tài liệu |
| 5 | Xác định yêu cầu phi chức năng như bảo mật và hiệu năng | Lê Thị Bảo Uyên | Non-functional Requirements |Screenshot tài liệu |
| 6 | Phân tích quy trình thuê xe và quản lí đơn thuê | Lê Thị Bảo Uyên | Business Flow |Screenshot flow |
| 7 | Thiết lập acceptance criteria cho các chức năng chính | Lê Thị Bảo Uyên | Requirement Documents | Screenshot tài liệu |
## AI có hỗ trợ không?

- [x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

AI hỗ trợ:
- Gợi ý hướng phát triển hệ thống Motov
- Gợi ý user roles và user stories
- Hỗ trợ xây dựng use case
- Gợi ý functional requirements và non-functional requirements
- Gợi ý business rules và acceptance criteria
- Đề xuất các tính năng phù hợp cho web và mobile app

## Commit/Screenshot minh chứng

- Screenshot tài liệu phân tích yêu cầu
- Screenshot use case diagram
- Screenshot user stories
- Link commit GitHub: [https://github.com/fptu-se-su26/mma301-su26-mma301_se19b05_group-02/tree/lethibaouyen]

## Ghi chú

Phase 02 tập trung vào việc phân tích yêu cầu và định hướng phát triển hệ thống.
Project được xây dựng theo hướng hiện đại gồm:
- Web quản lí
- Mobile app cho khách hàng
- Dashboard analytics
- Quản lí thuê xe thông minh
---

# [Phase 03] Thiết kế hệ thống

## Ngày thực hiện

```text
20/5/2026
```

## Đã hoàn thành

- [x] Thiết kế kiến trúc tổng quan
- [x] Thiết kế database/ERD
- [x] Thiết kế API
- [x] Thiết kế giao diện/wireframe
- [ ] Thiết kế flow xử lý
- [ ] Thiết kế class diagram
- [ ] Thiết kế sequence diagram
- [ ] Thiết kế security/authorization flow
- [ ] Review thiết kế
- [ ] Chỉnh sửa thiết kế sau feedback

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 | Thiết kế kiến trúc hệ thống web + mobile + backend | Lê Thị Bảo Uyên | Architecture Diagram | Screenshot diagram |
| 2 | Thiết kế database MongoDB gồm Users, Motorbikes, Bookings, Payments | Lê Thị Bảo Uyên | ERD | Screenshot ERD |
| 3 | Thiết kế RESTful API cho hệ thống | Lê Thị Bảo Uyên | API Design | Screenshot API |
| 4 | Thiết kế wireframe dashboard admin Motov | Lê Thị Bảo Uyên | UI/Wireframe | Screenshot wireframe |
| 5 | Thiết kế giao diện mobile app thuê xe | Lê Thị Bảo Uyên | Mobile UI | Screenshot mobile UI |
## AI có hỗ trợ không?

- [x] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

AI hỗ trợ:
- Gợi ý kiến trúc tổng quan cho hệ thống Motov
- Gợi ý thiết kế dashboard hiện đại
- Đề xuất cấu trúc database MongoDB
- Gợi ý API RESTful phù hợp
- Hỗ trợ ý tưởng UI/UX cho web và mobile app

## Commit/Screenshot minh chứng

- Screenshot wireframe
- Screenshot ERD
- Screenshot API design
- Link commit GitHub: [https://github.com/fptu-se-su26/mma301-su26-mma301_se19b05_group-02/tree/lethibaouyen]

## Ghi chú

Phase 03 tập trung vào thiết kế kiến trúc và giao diện hệ thống.
Hệ thống được xây dựng theo mô hình REST API và MongoDB.
Dashboard được định hướng theo phong cách hiện đại, tối giản và responsive.

---

# [Phase 04] Implementation

## Ngày thực hiện

```text
DD/MM/YYYY
```

## Đã hoàn thành

- [ ] Tạo project structure
- [ ] Cài đặt database connection
- [ ] Xây dựng backend
- [ ] Xây dựng frontend
- [ ] Xây dựng authentication/authorization
- [ ] Xử lý CRUD
- [ ] Xử lý validation
- [ ] Tích hợp API
- [ ] Xử lý upload/download file
- [ ] Xử lý lỗi
- [ ] Tối ưu giao diện
- [ ] Cập nhật README hướng dẫn chạy

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |
| 4 |  |  |  |  |
| 5 |  |  |  |  |

## AI có hỗ trợ không?

- [ ] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
Viết tại đây...
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Viết tại đây...
```

---

# [Phase 05] Testing & Debug

## Ngày thực hiện

```text
DD/MM/YYYY
```

## Đã hoàn thành

- [ ] Viết test case
- [ ] Chạy test chức năng chính
- [ ] Kiểm tra output
- [ ] Kiểm tra validation
- [ ] Kiểm tra lỗi giao diện
- [ ] Kiểm tra lỗi database
- [ ] Kiểm tra phân quyền
- [ ] Kiểm tra bảo mật cơ bản
- [ ] Fix bug
- [ ] Chạy lại sau khi fix bug
- [ ] Ghi nhận kết quả test

## Danh sách lỗi đã xử lý

| STT | Lỗi phát hiện | Nguyên nhân | Cách xử lý | Trạng thái |
|---:|---|---|---|---|
| 1 |  |  |  | Open / Fixed / Pending |
| 2 |  |  |  | Open / Fixed / Pending |
| 3 |  |  |  | Open / Fixed / Pending |
| 4 |  |  |  | Open / Fixed / Pending |
| 5 |  |  |  | Open / Fixed / Pending |

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

## AI có hỗ trợ không?

- [ ] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
Viết tại đây...
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Viết tại đây...
```

---

# [Phase 06] Hoàn thiện báo cáo và demo

## Ngày thực hiện

```text
DD/MM/YYYY
```

## Đã hoàn thành

- [ ] Hoàn thiện source code
- [ ] Hoàn thiện README.md
- [ ] Hoàn thiện report
- [ ] Hoàn thiện slide
- [ ] Hoàn thiện video demo
- [ ] Kiểm tra lại `AI_AUDIT_LOG.md`
- [ ] Kiểm tra lại `PROMPTS.md`
- [ ] Hoàn thiện `REFLECTION.md`
- [ ] Kiểm tra lại `CHANGELOG.md`
- [ ] Đóng gói bài nộp

## Thay đổi chi tiết

| STT | Nội dung thay đổi | Người thực hiện | File/Module liên quan | Minh chứng |
|---:|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

## AI có hỗ trợ không?

- [ ] Có
- [ ] Không

Nếu có, mô tả AI đã hỗ trợ phần nào:

```text
Viết tại đây...
```

## Commit/Screenshot minh chứng

```text
Dán link commit, screenshot hoặc mô tả minh chứng tại đây...
```

## Ghi chú

```text
Viết tại đây...
```

---

# 4. Tổng kết thay đổi cuối project

## 4.1. Các chức năng đã hoàn thành

| STT | Chức năng | Trạng thái | Minh chứng | Ghi chú |
|---:|---|---|---|---|
| 1 |  | Completed / Partial / Not Completed |  |  |
| 2 |  | Completed / Partial / Not Completed |  |  |
| 3 |  | Completed / Partial / Not Completed |  |  |
| 4 |  | Completed / Partial / Not Completed |  |  |
| 5 |  | Completed / Partial / Not Completed |  |  |

---

## 4.2. Các chức năng chưa hoàn thành

| STT | Chức năng | Lý do chưa hoàn thành | Hướng cải thiện |
|---:|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |

---

## 4.3. Tổng hợp AI hỗ trợ trong project

| Hạng mục | AI có hỗ trợ không? | Mức độ hỗ trợ | Ghi chú |
|---|---|---|---|
| Requirement | Có / Không | Ít / Trung bình / Nhiều |  |
| Design | Có / Không | Ít / Trung bình / Nhiều |  |
| Database | Có / Không | Ít / Trung bình / Nhiều |  |
| Coding | Có / Không | Ít / Trung bình / Nhiều |  |
| Debug | Có / Không | Ít / Trung bình / Nhiều |  |
| Testing | Có / Không | Ít / Trung bình / Nhiều |  |
| Report | Có / Không | Ít / Trung bình / Nhiều |  |
| Presentation | Có / Không | Ít / Trung bình / Nhiều |  |

---

## 4.4. Bài học rút ra

```text
Viết tại đây...
```

---

## 4.5. Hướng cải thiện tiếp theo

```text
Viết tại đây...
```

---

# 5. Cam kết cập nhật Changelog

Sinh viên/nhóm cam kết rằng nội dung changelog phản ánh đúng các thay đổi đã thực hiện trong quá trình làm bài tập/project.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
|  |  |
