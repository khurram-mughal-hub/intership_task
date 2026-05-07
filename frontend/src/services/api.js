const API_URL = "http://localhost:5000/api";

// Auth APIs
export const authAPI = {
  register: (data) => fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json()),

  login: (data) => fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json()),
};

// Service APIs
export const serviceAPI = {
  getAll: () => fetch(`${API_URL}/services`).then(res => res.json()),
  getById: (id) => fetch(`${API_URL}/services/${id}`).then(res => res.json()),
  create: (data, token) => fetch(`${API_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  update: (id, data, token) => fetch(`${API_URL}/services/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (id, token) => fetch(`${API_URL}/services/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
};

// Portfolio APIs
export const portfolioAPI = {
  getAll: () => fetch(`${API_URL}/portfolio`).then(res => res.json()),
  getById: (id) => fetch(`${API_URL}/portfolio/${id}`).then(res => res.json()),
  create: (data, token) => fetch(`${API_URL}/portfolio`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  update: (id, data, token) => fetch(`${API_URL}/portfolio/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (id, token) => fetch(`${API_URL}/portfolio/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
};

// Blog APIs
export const blogAPI = {
  getAll: () => fetch(`${API_URL}/blogs`).then(res => res.json()),
  getBySlug: (slug) => fetch(`${API_URL}/blogs/${slug}`).then(res => res.json()),
  getAllAdmin: (token) => fetch(`${API_URL}/blogs/admin/all`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
  create: (data, token) => fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  update: (id, data, token) => fetch(`${API_URL}/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (id, token) => fetch(`${API_URL}/blogs/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
};

// Inquiry APIs
export const inquiryAPI = {
  create: (data) => fetch(`${API_URL}/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  getAll: (token) => fetch(`${API_URL}/inquiries`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
  getById: (id, token) => fetch(`${API_URL}/inquiries/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
  update: (id, data, token) => fetch(`${API_URL}/inquiries/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (id, token) => fetch(`${API_URL}/inquiries/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
};

// Appointment APIs
export const appointmentAPI = {
  create: (data) => fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  getAll: (token) => fetch(`${API_URL}/appointments`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
  getById: (id, token) => fetch(`${API_URL}/appointments/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
  update: (id, data, token) => fetch(`${API_URL}/appointments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  delete: (id, token) => fetch(`${API_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json()),
};
