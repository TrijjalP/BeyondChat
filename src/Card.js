// src/Card.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import './Card.css';

Modal.setAppElement('#root');

function Card({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [fileType, setFileType] = useState('text');

  const openEditModal = () => setIsModalOpen(true);
  const closeEditModal = () => setIsModalOpen(false);
  const openDeleteDialog = () => setIsDeleteDialogOpen(true);
  const closeDeleteDialog = () => setIsDeleteDialogOpen(false);
  const handleDelete = () => {
    // Handle delete logic here
    closeDeleteDialog();
  };

  return (
    <div className="card">
      <div className="card-content">
        <p>{editContent}</p>
        <small>File type: {fileType}</small>
      </div>
      <div className="card-footer">
        <FaEdit onClick={openEditModal} className="icon" />
        <FaTrash onClick={openDeleteDialog} className="icon2" />
        <FaEye className="icon3" />
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeEditModal} className="EditClass">
        <h2>Edit Content</h2>
        <textarea 
          value={editContent} 
          onChange={(e) => setEditContent(e.target.value)} 
          rows="4" 
          cols="50"
          className="edit-text"
        />
        <div>
          <label>
            File Type:
            <select value={fileType} onChange={(e) => setFileType(e.target.value)} className="selectbox">
              <option value="text">Text</option>
              <option value="pdf">PDF</option>
              <option value="doc">DOC</option>
            </select>
          </label>
        </div>
        <div className="button-save-cancel">
        <button onClick={closeEditModal} className="save">Save</button>
        <button onClick={closeEditModal} className="cancel">Cancel</button>
        </div>
      </Modal>

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <div className="delete-dialog">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeDeleteDialog}>No</button>
        </div>
      )}
    </div>
  );
}

export default Card;
