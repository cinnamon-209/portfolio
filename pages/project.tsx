import { ChevronDownIcon } from '@chakra-ui/icons'
import { Image, Avatar, Box, Button, Center, Circle, Container, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle, SkeletonText, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react';
// import {Article} from '../models/dtos'; 


export default function Project(props: any) {
  const onCloseModal = () => {
    props.closeModal(false);
  }

  return (
    <>
      <Modal
        isCentered
        onClose={() => onCloseModal()}
        isOpen={props.openModal}
        motionPreset='slideInBottom'
        scrollBehavior={"inside"}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent> 
          <ModalHeader>{props.projectData.title}</ModalHeader>
          <ModalCloseButton />
            <ModalBody>
              <h1><b>{"Description"}</b></h1>
            </ModalBody>
            <ModalBody>
              {props.projectData.description}
            </ModalBody>
            <ModalBody>
              <h1><b>{"Reflection"}</b></h1>
            </ModalBody>
            <ModalBody>
              {props.projectData.body}
            </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
  }