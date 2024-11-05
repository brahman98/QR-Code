import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";

function QRCodeGen() {
  const [dataType, setDataType] = useState("URL");
  const [inputValue, setInputValue] = useState("");
  const qrRef = useRef(null); // Ссылка на QR-код

  const handleDataTypeChange = (type) => {
    setDataType(type);
    setInputValue(""); // Сброс значения при смене типа
  };

  const downloadQRCode = () => {
    if (qrRef.current === null) return;

    toPng(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "qrcode.png";
      link.click();
    });
  };

  const downloadQRCodeSVG = () => {
    const svgElement = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(svgBlob);
    link.download = "qrcode.svg";
    link.click();
  };

  return (
    <main className="main">
      <h2>
        Твой QR&#8209;код
        <br />
        <span className="highlight">для сайта</span>
      </h2>

      <div className="main__content">
        <div className="input__container">
          <p className="input__p">
            loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
            amet dui iaculis ex efficitur ultricies ac nec neque. Sed elementum
            lectus vel dui feugiat. Neque porro quisquam est qui dolorem..
          </p>
          <div className="input__type">
            <button
              className={dataType === "URL" ? "active" : ""}
              onClick={() => handleDataTypeChange("URL")}
            >
              <img src="img/link-solid.svg" alt="URL" /> URL
            </button>
            <button
              className={dataType === "Email" ? "active" : ""}
              onClick={() => handleDataTypeChange("Email")}
            >
              <img src="img/envelope-solid.svg" alt="Email" /> E-mail
            </button>
            <button
              className={dataType === "Text" ? "active" : ""}
              onClick={() => handleDataTypeChange("Text")}
            >
              <img src="img/align-justify-solid.svg" alt="Text" /> Text
            </button>
          </div>
          <div className="input__input">
            <input
              type="text"
              id="input_qr"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter ${dataType}`}
            />
          </div>
          <details className="btn-settings">
            <summary className="left-btn-settings">
              <div>
                <img src="img/gear-solid.svg" alt="Settings" />
                <span>Настройки</span>
              </div>
              <span>+</span>
            </summary>

            <ul>
              <li>Цвет</li>
              <li>Фон</li>
              <li>Размер</li>
            </ul>
          </details>
        </div>

        <div className="qr__container">
          <div className="qr__code" ref={qrRef}>
            {inputValue ? (
              <QRCodeSVG value={inputValue} size={280}  />
            ) : (
              <img src={"img/qrcode.JPG"} alt="QR Code" />
            )}
          </div>
          <div className="download__buttons">
            <button onClick={downloadQRCode}>
              <img src="img/download-solid.svg" alt="Download PNG" /> Скачать
              PNG
            </button>
            <button onClick={downloadQRCodeSVG}>
              <img src="img/download-solid.svg" alt="Download SVG" /> Скачать
              SVG
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QRCodeGen;
