module.exports = (client, raw) => {
  if(raw.t !== "MESSAGE_REACTION_ADD" && raw.t !== "MESSAGE_REACTION_REMOVE") return

  let servidor = client.guilds.get("666447067970928650")
  let membro = servidor.members.get(raw.d.user_id)

  if(raw.d.message_id === "667150531256647680") {

    let cargoPython = servidor.roles.get('667099088004579329'),
        cargoJavaScript = servidor.roles.get('667098960917168161'),
        cargoGolang = servidor.roles.get('667739229022846976')
        //cargoHTML = servidor.roles.get('663202091761664072'),
        //cargoJava = servidor.roles.get('663201708297682963')

    if(raw.t === "MESSAGE_REACTION_ADD"){
      if(raw.d.emoji.id === "667150378923720724"){
        if(membro.roles.has(cargoPython.id)) return;
        membro.addRole(cargoPython.id)
      }else if(raw.d.emoji.id === "667150378638376971"){
        if(membro.roles.has(cargoJavaScript.id)) return;
        membro.addRole(cargoJavaScript.id)
      }else if(raw.d.emoji.id === "667741049053249568"){
        if(membro.roles.has(cargoGolang.id)) return;
        membro.addRole(cargoGolang.id)
      } /*else if(raw.d.emoji.id === "530771462450315264"){
        if(membro.roles.has(cargoHTML.id)) return;
        membro.addRole(cargoHTML.id)
      } else if(raw.d.emoji.id === "530923700032241674"){
        if(membro.roles.has(cargoJava.id)) return;
        membro.addRole(cargoJava.id)
      } */
    }

    if(raw.t === "MESSAGE_REACTION_REMOVE"){
      if(raw.d.emoji.id === "667150378923720724"){
        if(!membro.roles.has(cargoPython.id)) return;
        membro.removeRole(cargoPython.id)
      }else if(raw.d.emoji.id === "667150378638376971"){
        if(!membro.roles.has(cargoJavaScript.id)) return;
        membro.removeRole(cargoJavaScript.id)
      }else if(raw.d.emoji.id === "667741049053249568"){
        if(!membro.roles.has(cargoGolang.id)) return;
        membro.removeRole(cargoGolang.id)
      } /*else if(raw.d.emoji.id === "530771462450315264"){
        if(!membro.roles.has(cargoHTML.id)) return;
        membro.removeRole(cargoHTML.id)
      } else if(raw.d.emoji.id === "530923700032241674"){
        if(!membro.roles.has(cargoJava.id)) return;
        membro.removeRole(cargoJava.id)
      } */
    }
  } else if (raw.d.message_id === "667154019290185741") {

    let cargoAvisos = servidor.roles.get("665953445534105610"),
        cargoEventos = servidor.roles.get("667152123380629516"),
        cargoChangelogs = servidor.roles.get("667164994059763763")

    if(raw.t === "MESSAGE_REACTION_ADD"){
      if(raw.d.emoji.name === "🔔"){
        if(membro.roles.has(cargoAvisos.id)) return;
        membro.addRole(cargoAvisos.id)
      } else if(raw.d.emoji.name === "📢"){
        if(membro.roles.has(cargoEventos.id)) return;
        membro.addrole(cargoEventos.id)
      } else if(raw.d.emoji.name === "📃"){
        if(membro.roles.has(cargoChangelogs.id)) return;
        membro.addRole(cargoChangelogs.id)
      }
    }

    if(raw.t === "MESSAGE_REACTION_REMOVE"){
      if(raw.d.emoji.name === "🔔"){
        if(!membro.roles.has(cargoAvisos.id)) return;
        membro.removeRole(cargoAvisos.id)
      } else if(raw.d.emoji.name === "📢"){
        if(!membro.roles.has(cargoEventos.id)) return;
        membro.addrole(cargoEventos.id)
      } else if(raw.d.emoji.name === "📃"){
        if(!membro.roles.has(cargoChangelogs.id)) return;
        membro.removeRole(cargoChangelogs.id)
      }
    }

  } else if (raw.d.message_id === "667145211272495112") {

    let cargoRed = servidor.roles.get("667095665184210944"),
        cargoBlue = servidor.roles.get("667095613946462245"),
        cargoPurple = servidor.roles.get("667095330625421361"),
        cargoGreen = servidor.roles.get("667095584741785600"),
        cargoYellow = servidor.roles.get("667095552177078295"),
        cargoOrange = servidor.roles.get("667095511576215588"),
        cargoWhite = servidor.roles.get("667130492205662248"),
        cargoBlack = servidor.roles.get("667130376216379432"),
        cargoPink = servidor.roles.get("667095477162082304")

    if(raw.t === "MESSAGE_REACTION_ADD"){
      if(raw.d.emoji.name === "🟥"){
        if(membro.roles.has(cargoRed.id)) return;
        membro.addRole(cargoRed.id)
      } else if(raw.d.emoji.name === "🟦"){
        if(membro.roles.has(cargoBlue.id)) return;
        membro.addRole(cargoBlue.id)
      } else if(raw.d.emoji.name === "🟪"){
        if(membro.roles.has(cargoPurple.id)) return;
        membro.addRole(cargoPurple.id)
      } else if(raw.d.emoji.name === "🟩"){
        if(membro.roles.has(cargoGreen.id)) return;
        membro.addRole(cargoGreen.id)
      } else if(raw.d.emoji.name === "🟨"){
        if(membro.roles.has(cargoYellow.id)) return;
        membro.addRole(cargoYellow)
      } else if(raw.d.emoji.name === "🟧"){
        if(membro.roles.has(cargoOrange.id)) return;
        membro.addRole(cargoOrange.id)
      } else if(raw.d.emoji.name === "⬜"){
        if(membro.roles.has(cargoWhite.id)) return;
        membro.addRole(cargoWhite.id)
      } else if(raw.d.emoji.name === "⬛"){
        if(membro.roles.has(cargoBlack.id)) return;
        membro.addRole(cargoBlack.id)
      } else if(raw.d.emoji.id === "667145092397662228"){
        if(membro.roles.has(cargoPink.id)) return;
        membro.addRole(cargoPink.id)
      }
    }

    if(raw.t === "MESSAGE_REACTION_REMOVE"){
      if(raw.d.emoji.name === "🟥"){
        if(!membro.roles.has(cargoRed.id)) return;
        membro.removeRole(cargoRed.id)
      } else if(raw.d.emoji.name === "🟦"){
        if(!membro.roles.has(cargoBlue.id)) return;
        membro.removeRole(cargoBlue.id)
      } else if(raw.d.emoji.name === "🟪"){
        if(!membro.roles.has(cargoPurple.id)) return;
        membro.removeRole(cargoPurple.id)
      } else if(raw.d.emoji.name === "🟩"){
        if(!membro.roles.has(cargoGreen.id)) return;
        membro.removeRole(cargoGreen.id)
      } else if(raw.d.emoji.name === "🟨"){
        if(!membro.roles.has(cargoYellow.id)) return;
        membro.removeRole(cargoYellow)
      } else if(raw.d.emoji.name === "🟧"){
        if(!membro.roles.has(cargoOrange.id)) return;
        membro.removeRole(cargoOrange.id)
      } else if(raw.d.emoji.name === "⬜"){
        if(!membro.roles.has(cargoWhite.id)) return;
        membro.removeRole(cargoWhite.id)
      } else if(raw.d.emoji.name === "⬛"){
        if(!membro.roles.has(cargoBlack.id)) return;
        membro.removeRole(cargoBlack.id)
      } else if(raw.d.emoji.id === "667145092397662228"){
        if(!membro.roles.has(cargoPink.id)) return;
        membro.removeRole(cargoPink.id)
      }
    }
  } else if (raw.d.message_id === "667396703069929502") {
    let cargoMembros = servidor.roles.get("667098065395515432"),
        cargoNverificado = servidor.roles.get("667724698548830250")

    if(raw.t === "MESSAGE_REACTION_ADD"){
      if(raw.d.emoji.id === "667144408201691136") {
        if(membro.roles.has(cargoMembros.id)) return;
        membro.addRole(cargoMembros.id)
        if(!membro.roles.has(cargoNverificado.id)) return;
        membro.removeRole(cargoNverificado.id)
      }
    }

    if(raw.t === "MESSAGE_REACTION_REMOVE"){
      if(raw.d.emoji.id === "667144408201691136") {
        if(!membro.roles.has(cargoMembros.id)) return;
        membro.removeRole(cargoMembros.id)
        if(membro.roles.has(cargoNverificado.id)) return;
        membro.addRole(cargoNverificado.id)
      }
    }
  }
};