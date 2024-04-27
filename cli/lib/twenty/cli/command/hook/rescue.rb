# frozen_string_literal: true

module Twenty::Command::Hook
  module Rescue
    FRAME_MAX = 15

    def run(...)
      super(...)
    rescue => ex
      require "paint"
      $stderr.print "\n",
                    "  ", Paint[" Exception ", :white, :red, :bold], "\n",
                    "  ", Paint[ex.class.to_s, :bold], "\n",
                    "  ", ex.message, "\n\n",
                    "  ", Paint[" Backtrace ", :white, :blue, :bold], "\n",
                    format_backtrace(ex.backtrace), "\n",
                    "\n"
    end

    private

    def format_backtrace(backtrace)
      backtrace.last(FRAME_MAX).map do
        "  #{_1.gsub(Dir.getwd, "")}"
      end.join("\n")
    end
  end
end
