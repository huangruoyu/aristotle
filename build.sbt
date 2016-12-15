name := """aristotle"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"
lazy val akkaVersion = "2.4.4"

resolvers += "Snowplow Repo" at "http://maven.snplow.com/releases/"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  specs2 % Test
  //"ch.qos.logback" %% "logback-classic" % "1.1.2",
  //"com.typesafe.akka" %% "akka-slf4j" % akkaVersion,
  //"com.typesafe.akka" %% "akka-cluster" % akkaVersion,
  //"com.typesafe.akka" %% "akka-cluster-tools" % akkaVersion
)

//libraryDependencies += "com.github.piotrga" % "async-dynamo" % "2.0.0"

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

fork in run := true
