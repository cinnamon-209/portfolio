import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image
} from '@chakra-ui/react'
import {useState} from "react";
import {BlogPost} from "../models/dtos";

export default function Project(props: any) {
  const [projectData, setProjectData ] = useState<undefined | null | BlogPost>(undefined)
  const onCloseModal = () => {
    props.closeModal(false);
  }

  useState(() => {
    setProjectData(props.projectData);
  })

  return (
    <>
      {projectData != undefined ?
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
          <ModalHeader>{projectData.title}</ModalHeader>
          <ModalCloseButton />
            <ModalBody>
              <h1><b>{"Description"}</b></h1>
            </ModalBody>
            <ModalBody>
              {projectData.description}
            </ModalBody>
            <ModalBody>
              <h1><b>{"Reflection"}</b></h1>
            </ModalBody>
            <ModalBody>
              {projectData.body}
            </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </> : "" }
    </>
    )
  }