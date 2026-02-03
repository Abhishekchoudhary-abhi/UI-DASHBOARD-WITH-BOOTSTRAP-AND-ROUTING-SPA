import React, { useState } from 'react';
import { Table, Button, Form, Modal, Badge, InputGroup, Row, Col } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Abhishek Choudhary', email: 'Abhi@cu.edu', role: 'Student', status: 'Active' },
    { id: 2, name: 'Akshitaa Rana', email: 'AK@cu.edu', role: 'Admin', status: 'Active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Student', status: 'Active' });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({ name: '', email: '', role: 'Student', status: 'Active' });
      handleClose();
    }
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Users Management</h2>
      
      <div className="card shadow-sm p-3 p-md-4">
        <Row className="mb-3 align-items-center">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <Form.Control
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <Button variant="danger" onClick={handleShow} className="w-100 w-md-auto">
              + ADD USER
            </Button>
          </Col>
        </Row>

        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <Badge bg={user.status === 'Active' ? 'success' : 'secondary'} pill>
                        {user.status}
                      </Badge>
                    </td>
                    <td>
                      <Button 
                        variant="link" 
                        className="text-danger p-0 text-decoration-none fw-bold" 
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No users found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Add User Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
              >
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={newUser.status}
                onChange={handleInputChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Users;
