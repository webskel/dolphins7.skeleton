# frozen_string_literal: true

module Twenty::Command::Hook
  module Rescue
    FRAMEMAX = 15
    INDENTBY = 2

    def run(...)
      super(...)
    rescue => ex
      require "paint"
      $stderr.print "\n",
                    "  ", Paint[" Exception ", :white, :red, :bold], "\n",
                    "  ", Paint[ex.class.to_s, :bold], "\n",
                    ex.message.each_line.map { [" " * INDENTBY, _1] }.join,
                    "\n\n",
                    "  ", Paint[" Backtrace ", :white, :blue, :bold], "\n",
                    format_backtrace(ex.backtrace), "\n",
                    "\n"
    end

    private

    def format_backtrace(backtrace)
      backtrace[0..FRAMEMAX - 1].map do
        [" " * INDENTBY, _1.gsub(Dir.getwd, "")].join
      end.join("\n")
    end
  end
end
