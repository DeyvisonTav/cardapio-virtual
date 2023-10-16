"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
export function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className="  flex items-center justify-center p-1 lg:p-2 text-white mt-9 lg:mt-[2.1rem] border-none"
        type="default"
        onClick={showModal}
      >
        <div className="text-[18px] lg:text-[24px]">
          <AiOutlineSearch />
        </div>
      </Button>
      <Modal
        title="Menu de opções"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: "black" } }}
        cancelText="Cancelar"
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
