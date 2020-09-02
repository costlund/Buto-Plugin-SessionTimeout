<?php
class PluginSessionTimeout{
  public function widget_embed(){
    wfPlugin::includeonce('wf/yml');
    $widget = new PluginWfYml(__DIR__.'/widget/embed.yml');
    wfDocument::renderElement($widget->get());
  }
  public function page_check(){
    $json = array('client' => wfUser::hasRole('client'));
    exit(json_encode($json));
  }
}
