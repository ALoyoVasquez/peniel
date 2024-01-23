import React from "react";

const FormVoluntario = () => {
  let ifr = document.getElementById("JotFormIFrame-240103954681050");
 
  if (ifr) {
    let src = ifr.src;
    let iframeParams = [];
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(
        window.location.href
          .substr(window.location.href.indexOf("?") + 1)
          .split("&")
      );
    }
    if (src && src.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(
        src.substr(src.indexOf("?") + 1).split("&")
      );
      src = src.substr(0, src.indexOf("?"));
    }
    iframeParams.push("isIframeEmbed=1");
    ifr.src = src + "?" + iframeParams.join("&");
  }

  window.handleIFrameMessage = function (e) {
    
    if (typeof e.data === "object") {
      return;
    }
    let args = e.data.split(":");
    if (args.length > 2) {
       iframe = document.getElementById(
        "JotFormIFrame-" + args[args.length - 1]
      );
    } else {
      iframe = document.getElementById("JotFormIFrame");
    }
    if (!iframe) {
      return;
    }
    switch (args[0]) {
      case "scrollIntoView":
        iframe.scrollIntoView();
        break;
      case "setHeight":
        iframe.style.height = args[1] + "px";
        if (
          !isNaN(args[1]) &&
          parseInt(iframe.style.minHeight) > parseInt(args[1])
        ) {
          iframe.style.minHeight = args[1] + "px";
        }
        break;
      case "collapseErrorPage":
        if (iframe.clientHeight > window.innerHeight) {
          iframe.style.height = window.innerHeight + "px";
        }
        break;
      case "reloadPage":
        window.location.reload();
        break;
      case "loadScript":
        if (!window.isPermitted(e.origin, ["jotform.com", "jotform.pro"])) {
          break;
        }
        let src = args[1];
        if (args.length > 3) {
          src = args[1] + ":" + args[2];
        }
        let script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        document.body.appendChild(script);
        break;
      case "exitFullscreen":
        if (window.document.exitFullscreen) window.document.exitFullscreen();
        else if (window.document.mozCancelFullScreen)
          window.document.mozCancelFullScreen();
        else if (window.document.mozCancelFullscreen)
          window.document.mozCancelFullScreen();
        else if (window.document.webkitExitFullscreen)
          window.document.webkitExitFullscreen();
        else if (window.document.msExitFullscreen)
          window.document.msExitFullscreen();
        break;
    }
    let isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
    if (
      isJotForm &&
      "contentWindow" in iframe &&
      "postMessage" in iframe.contentWindow
    ) {
      var urls = {
        docurl: encodeURIComponent(document.URL),
        referrer: encodeURIComponent(document.referrer),
      };
      iframe.contentWindow.postMessage(
        JSON.stringify({ type: "urls", value: urls }),
        "*"
      );
    }
  };
  window.isPermitted = function (originUrl, whitelisted_domains) {
    let url = document.createElement("a");
    url.href = originUrl;
    let hostname = url.hostname;
    let result = false;
    if (typeof hostname !== "undefined") {
      whitelisted_domains.forEach(function (element) {
        if (
          hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
          hostname === element
        ) {
          result = true;
        }
      });
      return result;
    }
  };
  if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
  }

  return (
    <div className="container flex flex-col justify-center items-center bg-white  gap-2 m-2 p-2 ">
      {/*  <h1 className="font-bold text-xl lg:text-3xl"> Peniel</h1>
      <p className="text-xs lg:text-base">
        Te felicitamos por dar este paso para ser un servidor, Completa este
        formulario para que tu solicitud sea completada.
      </p>
      <h2 className="font-bold text-sm lg:text-xl">
        Bienvenido al equipo de Servidores del COCI Peniel
      </h2>
      <div className="container w-50 sm:w-50 lg:w-80">
        <form action="submit" className="flex flex-col text-xs lg:text-base">
          <label htmlFor="name">Nombres:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="lastname">Apellidos:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="email">Correo Electronico:</label>
          <input type="text" className="border-2 rounded-md"/>
          <label htmlFor="email2">Confirma tu Correo Electronico:</label>
          <input type="text"className="border-2 rounded-md"/>
          <h3>Mi proximo paso</h3>
          <div className="flex flex-col justify-start items-start">
            <div>
              <input type="checkbox" name="listo" id="" />
              <label htmlFor="amReady"> Estoy listo para servir</label>
            </div>
            <div>
              <input type="checkbox" name="listo" id="" />
              <label htmlFor="amReady"> Necesito capacitacion</label>
            </div>
          </div>
          <hr />
          <div className="flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </form>
      </div> */}
      <iframe
        id="JotFormIFrame-240103954681050"
        title="¿Deseas ser un servidor?"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/240103954681050"
        frameborder="0"
        style={{minWidth: "100%", maxWidth:"100%", height:"539px",border:"none"}} 
        scrolling="auto"
      ></iframe>
    </div>
  );
};

export default FormVoluntario;
