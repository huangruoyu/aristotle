package controllers

import akka.actor.ActorSystem
import akka.actor.Props
import akka.actor.actorRef2Scala
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.iteratee.Concurrent
import play.api.libs.iteratee.Iteratee
import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.mvc.WebSocket
import akka.actor.Inbox
import com.typesafe.config.ConfigFactory

class Application extends Controller {

  def index = Action {

    Ok(views.html.index("Welcome to Aristotle"))
  }

}

