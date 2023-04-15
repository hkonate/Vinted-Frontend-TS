import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InpuDataType } from "../redux/Types";
import {
  PublishBox,
  Center,
  Title,
  Form,
  ImageBlock,
  Image,
  CenterBox,
  Block,
  DotedBox,
  LabelText,
  Close,
  Input,
  Field,
  Box,
  TextArea,
  TextAreaBox,
  Subtitle,
  PriceBlock,
  PriceBox,
  CheckBoxContainer,
  CheckBox,
  PublishButtonBox,
  PublishButton,
  Error,
} from "./publishStyles";
import { usePublishOfferMutation } from "../redux/ApiSlice";
import { useSelector } from "react-redux";
import { RootState, Authentificated } from "../redux/Types";
import { Spinner, SpinnerBox } from "../appStyles";

export function Publish() {
  const [files, setFiles] = useState<File[]>([]);
  const [PublishOffer, { isLoading, data, isError }] =
    usePublishOfferMutation();
  const user = useSelector(
    (state: RootState) => state.user
  ) as unknown as Authentificated;

  const inputData: InpuDataType[] = [
    { name: "Marque", placeholder: "ex: Zara" },
    { name: "Taille", placeholder: "ex: L/ 40 / 12" },
    { name: "Couleur", placeholder: "ex: Fushia" },
    { name: "Etat", placeholder: "'Neuf avec étiquette" },
    { name: "Lieu", placeholder: "ex: Paris" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/");
  }, [data]);

  useEffect(() => {}, [files]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("picture", files[i]);
      }
    }
    formData.append(
      "title",
      (event.currentTarget[1] as HTMLInputElement).value
    );
    formData.append(
      "description",
      (event.currentTarget[2] as HTMLInputElement).value
    );
    formData.append(
      "brand",
      (event.currentTarget[3] as HTMLInputElement).value
    );
    formData.append("size", (event.currentTarget[4] as HTMLInputElement).value);
    formData.append(
      "color",
      (event.currentTarget[5] as HTMLInputElement).value
    );
    formData.append(
      "condition",
      (event.currentTarget[6] as HTMLInputElement).value
    );
    formData.append("city", (event.currentTarget[7] as HTMLInputElement).value);
    formData.append(
      "price",
      (event.currentTarget[8] as HTMLInputElement).value
    );
    const obj = {
      formData: formData,
      token: user.user.token,
    };
    PublishOffer(obj);
  }

  function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    const newFiles = [...files];
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      newFiles.push(event.dataTransfer.files[i]);
    }
    setFiles(newFiles);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newFiles = [...files];
    for (let i = 0; i < event.target.files!.length; i++) {
      newFiles.push(event.target.files![i]);
    }
    if (newFiles) setFiles(newFiles);
  }

  return !isLoading ? (
    <PublishBox>
      <Center>
        <Title>Vendre un article</Title>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <ImageBlock>
            <DotedBox
              isEmpty={files.length === 0}
              onDrop={(event) => {
                event.preventDefault();
                handleDrop(event);
              }}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault()}
            >
              <Input
                onChange={(event) => handleFileChange(event)}
                id="addpicture"
                type="file"
                placeholder="Add a picture"
                multiple
              />
              {files.length === 0 ? (
                <CenterBox>
                  <LabelText>GLISSER OU AJOUTER VOS PHOTOS ICI</LabelText>
                </CenterBox>
              ) : (
                <>
                  {files.map((ele) => {
                    const url = URL.createObjectURL(ele);
                    return (
                      <Image
                        key={ele.lastModified}
                        src={url}
                        alt={`${ele.name}${ele.lastModified}`}
                      />
                    );
                  })}
                </>
              )}
            </DotedBox>
            {files.length > 0 && <Close onClick={() => setFiles([])}>X</Close>}
          </ImageBlock>
          <Block>
            <Box>
              <Subtitle>Titre</Subtitle>
              <Field type="text" placeholder="ex: Chemise Sézane verte" />
            </Box>
            <TextAreaBox>
              <Subtitle>Describe your article</Subtitle>
              <TextArea
                name="descrip"
                rows={5}
                placeholder="ex: porté quelquefois, taille correctement"
              />
            </TextAreaBox>
          </Block>
          <Block>
            {inputData.map((data, idx) => (
              <Box key={idx}>
                <Subtitle>{data.name}</Subtitle>
                <Field type="text" placeholder={data.placeholder} />
              </Box>
            ))}
          </Block>
          <Block>
            <PriceBlock>
              <Subtitle>Prix</Subtitle>
              <PriceBox>
                <Field type="text" placeholder="0,00 €" />
                <CheckBoxContainer>
                  <CheckBox type="checkbox" />
                  <Subtitle>Je suis intéressé(e) par les échanges</Subtitle>
                </CheckBoxContainer>
              </PriceBox>
            </PriceBlock>
          </Block>
          <PublishButtonBox>
            <PublishButton
              type="submit"
              disabled={isLoading || files.length === 0 ? true : false}
            >
              Add
            </PublishButton>
          </PublishButtonBox>
        </Form>
        {isError && <Error>Quelque chose n'a pas fonctionné.</Error>}
      </Center>
    </PublishBox>
  ) : (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  );
}
