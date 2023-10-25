import React, { useState, useEffect, useMemo } from 'react';
import styles from './frase.module.css';
import { BsPencil } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';
import { AiFillDelete, AiTwotoneSave } from 'react-icons/ai';
import { Input } from 'antd';
const { TextArea } = Input;

function Frase(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedFrase, setEditedFrase] = useState(props.frase);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const colorPalette = useMemo(() => ["#0045b5", "#6e0707", "#878509", "#204d18", "#4a0d46", "#000845"], []);

    useEffect(() => {
        setBackgroundColor(getRandomColorFromPalette(colorPalette));
    }, [colorPalette]);


    function getRandomColorFromPalette(palette) {
        const randomIndex = Math.floor(Math.random() * palette.length);
        return palette[randomIndex];
    }

    const handleEditClick = () => {
        props.handleEditFrase(editedFrase, props.index);
        setIsEditing(false);
    };

    const handleCopyClick = () => {
        const textToCopy = props.frase;
        navigator.clipboard.writeText(textToCopy).then(
            function () {
                console.log('Texto copiado com sucesso: ' + textToCopy);
            },
            function (err) {
                console.error('Falha ao copiar texto: ', err);
            }
        );
    };

    const ClickEditar = () => {
        setEditedFrase(props.frase);
        setIsEditing(true);
    };

    return (
        <div className={styles.containerFrase} style={{ backgroundColor }}>
            {isEditing ? (
                <div className={styles.Editing}>
                    <TextArea
                        type="text"
                        value={editedFrase}
                        onChange={(e) => setEditedFrase(e.target.value)}
                    />
                    <AiTwotoneSave className={styles.save} onClick={handleEditClick}>Salvar</AiTwotoneSave>
                </div>
            ) : (
                <div className={styles.NoEditing}>
                    <pre className={styles.frase}>{props.frase}</pre>
                    <div className={styles.buttons}>
                        <BsPencil className={styles.pen} onClick={() => ClickEditar()}>Editar</BsPencil>
                        <FiCopy className={styles.copy} onClick={handleCopyClick}>Copiar</FiCopy>
                        <AiFillDelete className={styles.delete} onClick={() => props.handleDeleteFrase(props.index)}>Excluir</AiFillDelete>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Frase;
