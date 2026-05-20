# Prompt Log

## 1. Thông tin chung

| Thông tin | Nội dung |
|---|---|
| Môn học | MMA301 |
| Mã môn học |  |
| Lớp | SE19B05 |
| Học kỳ | 7 |
| Tên bài tập / Project | Motov - Hệ thống cho thuê xe máy |
| Tên sinh viên / Nhóm |  Lê Thị Bảo Uyên / 2|
| MSSV / Danh sách MSSV | DE180515 |
| Giảng viên hướng dẫn | QuangLTN3 |
| Ngày bắt đầu |  15/5/2026 |
| Ngày cập nhật gần nhất | 16/5/2026 |

---

## 2. Mục đích của file Prompt Log

File này dùng để ghi lại các prompt quan trọng đã sử dụng trong quá trình thực hiện bài tập, lab, assignment hoặc project.

Sinh viên/nhóm cần ghi lại:

- Đã hỏi AI điều gì.
- Mục đích sử dụng prompt.
- Công cụ AI đã sử dụng.
- AI đã trả lời hoặc gợi ý gì.
- Kết quả đó có được áp dụng vào bài hay không.
- Sinh viên/nhóm đã kiểm tra, chỉnh sửa hoặc cải tiến gì sau khi nhận kết quả từ AI.

---

## 3. Công cụ AI đã sử dụng

Đánh dấu các công cụ AI đã sử dụng.

- [x] ChatGPT
- [ ] Gemini
- [ ] Claude
- [ ] GitHub Copilot
- [ ] Cursor
- [ ] Antigravity
- [ ] Microsoft Copilot
- [ ] Perplexity
- [ ] Công cụ khác: ....................................

---

## 4. Bảng tổng hợp prompt đã sử dụng

| STT | Ngày | Công cụ AI | Mục đích | Prompt tóm tắt | Kết quả chính | Có sử dụng vào bài không? | Minh chứng |
|---:|---|---|---|---|---|---|---|
| 1 | 15/05/2026 | ChatGPT | Phân tích đề tài | Xây dựng ý tưởng hệ thống cho thuê xe máy | Đề xuất kiến trúc mobile + backend + admin web | Có | README.md |
| 2 | 16/05/2026 | ChatGPT | Thiết kế kiến trúc | Gợi ý cấu trúc project React Native + NodeJS | Đề xuất folder structure chuẩn | Có | Project Structure |
| 3 | 16/05/2026 | ChatGPT | Thiết kế database | Gợi ý ERD cho hệ thống thuê xe máy | Đề xuất collections MongoDB | Có | ERD Diagram |
| 4 | 17/05/2026 | ChatGPT | Thiết kế UI | Gợi ý dashboard hiện đại cho Motov | Đề xuất giao diện admin dashboard | Có | Wireframe |
| 5 | 17/05/2026 | ChatGPT | Viết use case | Gợi ý user roles và use cases | Đề xuất các chức năng hệ thống | Có | Use Case Diagram |
| 6 | 18/05/2026 | ChatGPT | Viết requirement | Functional và non-functional requirements | Hoàn thiện tài liệu SRS | Có | Requirement Document |
| 7 | 18/05/2026 | ChatGPT | API Design | Thiết kế RESTful API cho Motov | Đề xuất endpoint backend | Có | API Document |
| 8 | 19/05/2026 | ChatGPT | UI/UX Mobile | Gợi ý giao diện mobile app | Đề xuất flow mobile booking | Có | Mobile Wireframe |
| 9 | 19/05/2026 | ChatGPT | Dashboard Analytics | Gợi ý biểu đồ và thống kê | Đề xuất analytics dashboard | Có | Dashboard UI |
| 10 | 20/05/2026 | ChatGPT | Documentation | Hỗ trợ viết changelog và AI audit log | Hoàn thiện tài liệu project | Có | CHANGELOG.md |
---

## 5. Prompt chi tiết

> Sinh viên/nhóm có thể nhân bản mẫu “Prompt số...” nhiều lần tùy số lượng prompt thực tế đã sử dụng.

---

### Prompt số 1

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 16/05/2026 |
| Công cụ AI | ChatGPT |
| Mục đích | Thiết kế cấu trúc project |
| Phần việc liên quan | Architecture |
| Mức độ sử dụng | Hỏi cấu trúc project |



#### 5.1. Prompt nguyên văn


Hãy gợi ý cấu trúc thư mục cho project Motov gồm React web, React Native mobile app, NodeJS Express backend và MongoDB.


#### 5.2. Bối cảnh khi viết prompt

Nhóm cần tổ chức source code rõ ràng để thuận tiện phát triển và quản lí project.

#### 5.3. Kết quả AI trả về

AI đề xuất chia project thành client-web, mobile-app, server và docs.

#### 5.4. Kết quả đã áp dụng vào bài

Nhóm sử dụng cấu trúc thư mục được đề xuất để khởi tạo repository.

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

Nhóm bổ sung thêm thư mục assets và components cho frontend.

#### 5.6. Đánh giá chất lượng prompt

Đánh dấu các nhận xét phù hợp.

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit |  |
| File liên quan | README.md |
| Screenshot | Screenshot cấu trúc project |
| Kết quả chạy/test | Project chạy thành công |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

Cấu trúc project giúp nhóm dễ quản lí source code giữa web, mobile và backend.

---

### Prompt số 2

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 16/05/2026 |
| Công cụ AI | ChatGPT |
| Mục đích | Thiết kế database |
| Phần việc liên quan | Database Design |
| Mức độ sử dụng | Gợi ý ERD |

#### 5.1. Prompt nguyên văn

Hãy gợi ý database MongoDB cho hệ thống quản lí và cho thuê xe máy Motov.

#### 5.2. Bối cảnh khi viết prompt

Nhóm cần xác định các collection và mối quan hệ dữ liệu của hệ thống.

#### 5.3. Kết quả AI trả về

AI đề xuất các collection gồm Users, Motorbikes, Bookings, Payments và Reviews.

#### 5.4. Kết quả đã áp dụng vào bài

Nhóm sử dụng các collection được đề xuất để xây dựng ERD ban đầu.

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

Nhóm bổ sung thêm collection Notifications và VehicleMaintenance.

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit |  |
| File liên quan | ERD Diagram |
| Screenshot | Screenshot ERD |
| Kết quả chạy/test | MongoDB schema hoạt động |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

Database được tối ưu theo hướng REST API và MongoDB NoSQL.

---

### Prompt số 3

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 17/05/2026 |
| Công cụ AI | ChatGPT  |
| Mục đích | Thiết kế UI Dashboard |
| Phần việc liên quan | UI/UX |
| Mức độ sử dụng | Gợi ý giao diện |

#### 5.1. Prompt nguyên văn

Hãy gợi ý giao diện dashboard hiện đại cho hệ thống Motov.

#### 5.2. Bối cảnh khi viết prompt

Nhóm muốn thiết kế dashboard hiện đại, dễ sử dụng và phù hợp với hệ thống quản lí thuê xe.

#### 5.3. Kết quả AI trả về

AI đề xuất dashboard theo phong cách modern minimal với sidebar, analytics chart và thống kê xe.

#### 5.4. Kết quả đã áp dụng vào bài

Nhóm sử dụng layout dashboard và card analytics để thiết kế wireframe.

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

Nhóm bổ sung thêm dark mode và bảng quản lí booking.

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit |  |
| File liên quan | Wireframe |
| Screenshot | Screenshot dashboard |
| Kết quả chạy/test | UI hiển thị đúng |
| Link tài liệu/báo cáo |  |
| Ghi chú khác |  |

#### 5.8. Ghi chú thêm

Dashboard được thiết kế responsive để hỗ trợ cả desktop và tablet.

---

## 6. Prompt quan trọng nhất

Chọn một prompt có ảnh hưởng lớn nhất đến bài tập/project.

### 6.1. Prompt được chọn

```text
Dán prompt quan trọng nhất tại đây.
```

### 6.2. Vì sao prompt này quan trọng?

```text
Viết tại đây...
```

### 6.3. Kết quả prompt này mang lại

```text
Viết tại đây...
```

### 6.4. Sinh viên/nhóm đã kiểm tra kết quả như thế nào?

```text
Viết tại đây...
```

### 6.5. Sinh viên/nhóm đã cải tiến gì từ kết quả AI?

```text
Viết tại đây...
```

---

## 7. Prompt chưa hiệu quả

Ghi lại ít nhất một prompt chưa tạo ra kết quả tốt hoặc chưa phù hợp.

### 7.1. Prompt chưa hiệu quả

```text
Dán prompt chưa hiệu quả tại đây.
```

### 7.2. Vì sao prompt này chưa hiệu quả?

```text
Viết tại đây...
```

Gợi ý nguyên nhân:

- Prompt quá ngắn.
- Thiếu bối cảnh bài toán.
- Không nêu rõ yêu cầu đầu ra.
- Không cung cấp ngôn ngữ lập trình/công nghệ đang dùng.
- Không đưa lỗi cụ thể.
- Không đưa ví dụ input/output.
- Không yêu cầu AI giải thích.
- Hỏi AI làm toàn bộ thay vì hỏi từng phần.

### 7.3. Cách cải thiện prompt

```text
Viết tại đây...
```

### 7.4. Prompt sau khi cải tiến

```text
Dán prompt đã được cải tiến tại đây.
```

### 7.5. Kết quả sau khi cải tiến prompt

```text
Viết tại đây...
```

---

## 8. Bài học về cách viết prompt

### 8.1. Khi viết prompt, em/nhóm cần cung cấp thông tin gì để AI trả lời tốt hơn?

```text
Viết tại đây...
```

Gợi ý:

- Mục tiêu cần đạt.
- Bối cảnh bài toán.
- Công nghệ/ngôn ngữ lập trình đang dùng.
- Input/output mong muốn.
- Ràng buộc của đề bài.
- Lỗi đang gặp.
- Format kết quả mong muốn.
- Yêu cầu AI giải thích từng bước.

### 8.2. Em/nhóm đã học được gì về cách đặt câu hỏi cho AI?

```text
Viết tại đây...
```

### 8.3. Lần sau em/nhóm sẽ cải thiện prompt như thế nào?

```text
Viết tại đây...
```

---

## 9. Phân loại prompt đã sử dụng

Đánh dấu số lượng prompt theo từng nhóm.

| Loại prompt | Số lượng | Ví dụ prompt tiêu biểu |
|---|---:|---|
| Prompt phân tích yêu cầu |  |  |
| Prompt giải thích kiến thức |  |  |
| Prompt thiết kế giải pháp |  |  |
| Prompt thiết kế database |  |  |
| Prompt sinh code mẫu |  |  |
| Prompt debug lỗi |  |  |
| Prompt viết test case |  |  |
| Prompt review code |  |  |
| Prompt tối ưu code |  |  |
| Prompt viết báo cáo |  |  |
| Prompt chuẩn bị thuyết trình |  |  |
| Prompt khác |  |  |

---

## 10. Checklist chất lượng prompt

Sinh viên/nhóm tự kiểm tra chất lượng prompt đã dùng.

| Tiêu chí | Đã đạt? | Ghi chú |
|---|:---:|---|
| Prompt có mục tiêu rõ ràng |  |  |
| Prompt có đủ bối cảnh |  |  |
| Prompt có nêu công nghệ/ngôn ngữ sử dụng |  |  |
| Prompt có nêu yêu cầu đầu ra |  |  |
| Prompt không yêu cầu AI làm toàn bộ bài một cách máy móc |  |  |
| Prompt có yêu cầu AI giải thích hoặc phân tích |  |  |
| Kết quả AI được kiểm tra lại |  |  |
| Kết quả AI được chỉnh sửa trước khi sử dụng |  |  |
| Prompt quan trọng được ghi lại đầy đủ |  |  |
| Prompt sai/chưa hiệu quả được rút kinh nghiệm |  |  |

---

## 11. Cam kết sử dụng prompt minh bạch

Sinh viên/nhóm cam kết rằng:

- Các prompt quan trọng đã được ghi lại trung thực.
- Không che giấu việc sử dụng AI trong các phần quan trọng của bài.
- Không nộp nguyên văn kết quả AI nếu chưa kiểm tra và chỉnh sửa.
- Có khả năng giải thích các phần đã sử dụng từ AI.
- Chịu trách nhiệm với sản phẩm cuối cùng.

| Đại diện sinh viên/nhóm | Ngày xác nhận |
|---|---|
|  |  |
